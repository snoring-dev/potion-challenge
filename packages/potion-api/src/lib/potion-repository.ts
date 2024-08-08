import prisma from "./prisma";

const potionFieldsProjection = {
  ...Object.fromEntries(
    Object.keys(prisma.potion.fields).map((f) => [f, true])
  ),
  ingredients: {
    select: {
      quantity: true,
      ingredient: true,
    },
  },
  metrics: {
    select: {
      ...Object.fromEntries(
        Object.keys(prisma.metrics.fields).map((f) => [f, true])
      ),
      id: false,
      potionId: false,
      potion: false,
    },
  },
  magicalBrewStats: {
    select: {
      ...Object.fromEntries(
        Object.keys(prisma.magicalBrewStats.fields).map((f) => [f, true])
      ),
      id: false,
      potionId: false,
      potion: false,
    },
  },
};

class PotionRepository {
  async findAll() {
    const potions = await prisma.potion.findMany({
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        metrics: true,
        magicalBrewStats: true,
      },
    });

    return potions;
  }

  async createPotion(body: any) {
    const { ingredients, metrics, magicalBrewStats, ...potionData } = body;

    const newPotion = await prisma.potion.create({
      data: {
        ...potionData,
        ingredients: {
          create: ingredients.map((ing: { id: string; quantity: number }) => ({
            ingredient: {
              connect: { id: ing.id },
            },
            quantity: ing.quantity,
          })),
        },
        metrics: {
          create: metrics,
        },
        magicalBrewStats: {
          create: magicalBrewStats,
        },
      },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        metrics: true,
        magicalBrewStats: true,
      },
    });

    return newPotion;
  }

  async deletePotion(id: string) {
    await prisma.$transaction(async (tx) => {
      await tx.potionIngredient.deleteMany({
        where: { potionId: id },
      });

      await tx.metrics.delete({
        where: { potionId: id },
      });

      await tx.magicalBrewStats.delete({
        where: { potionId: id },
      });

      await tx.potion.delete({
        where: { id },
      });
    });
  }

  async findOne(id: string) {
    const potion = await prisma.potion.findUnique({
      where: { id },
      select: potionFieldsProjection,
    });

    if (!potion) {
      throw Error("Potion not found");
    }

    const suggestedPotions = await prisma.potion.findMany({
      where: {
        id: {
          not: id,
        },
      },
      take: 3,
      include: {
        metrics: true,
        magicalBrewStats: true,
      },
    });

    return {
      ...potion,
      suggestedPotions,
    };
  }

  async findRandom() {
    const ids = await prisma.potion.findMany({
      select: { id: true },
    });

    const index = Math.floor(Math.random() * ids.length);
    const randomPotionId = ids[index] ? ids[index] : ids.at(ids.length - 1);

    return this.findOne(randomPotionId?.id ?? '');
  }
}

const repository = new PotionRepository();

export default repository;
