import React, { useState } from 'react';
import styled from 'styled-components';

export interface TabData {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabData[];
  onTabChange?: (tabId: string) => void;
  defaultTab?: string;
}

const TabsContainer = styled.div`
  display: inline-flex;
  background-color: #f0f0f0;
  border-radius: 50px;
  border: 1px solid #CCC;
  padding: 4px;
  gap: 4px;
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.$isActive ? 'var(--royal-blue)' : 'transparent'};
  color: ${props => props.$isActive ? 'var(--white)' : 'var(--deep-navy)'};
  
  &:hover {
    background-color: ${props => props.$isActive ? 'var(--royal-blue)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

export const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange, defaultTab }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id || '');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          $isActive={activeTab === tab.id}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsContainer>
  );
};
