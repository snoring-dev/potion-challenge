import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export interface TabItem {
  name: string;
  content: React.ReactNode;
}

interface TabComponentProps {
  tabs: TabItem[];
  className?: string;
  defaultIndex?: number;
}

export const TabComponent: React.FC<TabComponentProps> = ({
  tabs,
  className,
  defaultIndex = 1,
}) => {
  return (
    <div className={className}>
      <TabGroup defaultIndex={defaultIndex}>
        <TabList className="flex gap-4">
          {tabs.map(({ name }) => (
            <Tab
              key={name}
              className="rounded-full py-1 px-3 text-sm/6 font-semibold text-ink-800 focus:outline-none data-[selected]:bg-ink-300/10 data-[hover]:bg-ink-300/5 data-[selected]:data-[hover]:bg-ink-300/10 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {tabs.map(({ name, content }) => (
            <TabPanel key={name} className="rounded-xl bg-ink-300/5 p-3">
              {content}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};
