import React, { createContext, useContext, useState, ReactNode } from 'react';

// Data generation utilities
export const generateRandomValue = (base: number, variance: number = 0.3) => {
  const min = base * (1 - variance);
  const max = base * (1 + variance);
  return Math.random() * (max - min) + min;
};

export const generateRandomPercentage = (base: number, variance: number = 0.2) => {
  return Math.round(generateRandomValue(base, variance));
};

export const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `$${Math.round(value / 1000)}K`;
  }
  return `$${Math.round(value)}`;
};

export const formatNumber = (value: number, suffix: string = '') => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M${suffix}`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K${suffix}`;
  }
  return `${Math.round(value)}${suffix}`;
};

// Types
export interface FilterState {
  archetype: string;
  businessUnit: string;
  products: string;
  projects: string;
  customers: string;
}

export interface DashboardData {
  usageStats: {
    dailyActiveUsers: number;
    sessionFrequency: number;
    sessionLength: number;
    totalInteractions: number;
  };
  productivityMetrics: {
    timeSaved: number;
    taskSpeed: number;
    errorReduction: number;
  };
  businessMetrics: {
    costSavings: number;
    roi: number;
    userSatisfaction: number;
  };
  productUsage: Array<{
    product: string;
    usage: number;
    users: number;
  }>;
  useCases: Array<{
    useCase: string;
    count: number;
    percentage: number;
  }>;
}

interface DashboardContextType {
  filters: FilterState;
  data: DashboardData;
  updateFilter: (key: keyof FilterState, value: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

// Base data templates
const baseData: DashboardData = {
  usageStats: {
    dailyActiveUsers: 12400,
    sessionFrequency: 8.2,
    sessionLength: 24,
    totalInteractions: 156000
  },
  productivityMetrics: {
    timeSaved: 45,
    taskSpeed: 60,
    errorReduction: 38
  },
  businessMetrics: {
    costSavings: 2400000,
    roi: 340,
    userSatisfaction: 8.7
  },
  productUsage: [
    { product: "Word", usage: 85, users: 8200 },
    { product: "Excel", usage: 72, users: 6800 },
    { product: "Outlook", usage: 68, users: 6100 },
    { product: "Teams", usage: 64, users: 5900 },
    { product: "OneNote", usage: 45, users: 4200 },
    { product: "Co-Pilot Agents", usage: 38, users: 3800 },
    { product: "Whiteboard", usage: 28, users: 2900 }
  ],
  useCases: [
    { useCase: "Requirements Summary", count: 2800, percentage: 18 },
    { useCase: "User Story Generation", count: 2400, percentage: 15 },
    { useCase: "Test Scenario Generation", count: 2100, percentage: 13 },
    { useCase: "Design Document Generation", count: 1900, percentage: 12 },
    { useCase: "Configuration Summary", count: 1700, percentage: 11 },
    { useCase: "Release Checklists", count: 1500, percentage: 10 },
    { useCase: "Data Generation", count: 1300, percentage: 8 }
  ]
};

const generateRandomData = (): DashboardData => {
  return {
    usageStats: {
      dailyActiveUsers: Math.round(generateRandomValue(12400, 0.4)),
      sessionFrequency: Number(generateRandomValue(8.2, 0.3).toFixed(1)),
      sessionLength: Math.round(generateRandomValue(24, 0.3)),
      totalInteractions: Math.round(generateRandomValue(156000, 0.4))
    },
    productivityMetrics: {
      timeSaved: generateRandomPercentage(45, 0.3),
      taskSpeed: generateRandomPercentage(60, 0.3),
      errorReduction: generateRandomPercentage(38, 0.3)
    },
    businessMetrics: {
      costSavings: Math.round(generateRandomValue(2400000, 0.4)),
      roi: generateRandomPercentage(340, 0.3),
      userSatisfaction: Number(generateRandomValue(8.7, 0.2).toFixed(1))
    },
    productUsage: baseData.productUsage.map(item => ({
      ...item,
      usage: generateRandomPercentage(item.usage, 0.3),
      users: Math.round(generateRandomValue(item.users, 0.4))
    })),
    useCases: baseData.useCases.map(item => ({
      ...item,
      count: Math.round(generateRandomValue(item.count, 0.4)),
      percentage: generateRandomPercentage(item.percentage, 0.3)
    }))
  };
};

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState>({
    archetype: '',
    businessUnit: '',
    products: '',
    projects: '',
    customers: ''
  });

  const [data, setData] = useState<DashboardData>(baseData);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    // Generate new random data when filter changes
    setData(generateRandomData());
  };

  return (
    <DashboardContext.Provider value={{ filters, data, updateFilter }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};