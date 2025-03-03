import { useState } from 'react';
import { 
  FileText, 
  Code, 
  Users, 
  Workflow, 
  Database, 
  Server, 
  Shield, 
  Boxes,
  Layers,
  GitBranch,
  Zap,
  CheckSquare,
  BarChart,
  Clock,
  Brain,
  Bell
} from 'lucide-react';
import { FunctionalRequirements } from './FunctionalRequirements';
import { NonFunctionalRequirements } from './NonFunctionalRequirements';
import { UseCaseDiagram } from './UseCaseDiagram';
import { ComponentDiagram } from './ComponentDiagram';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export function RequirementsComponent() {
  const [activeTab, setActiveTab] = useState<'functional' | 'non-functional' | 'use-case' | 'component' | 'architecture'>('functional');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-white" />
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Project Requirements & Architecture
            </h1>
            <p className="text-blue-100">
              Comprehensive overview of system requirements, diagrams, and architecture
            </p>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('functional')}
          className={`px-4 py-2 border-b-2 font-medium text-sm whitespace-nowrap ${
            activeTab === 'functional'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <CheckSquare className="h-4 w-4 mr-1.5" />
            Functional Requirements
          </div>
        </button>
        <button
          onClick={() => setActiveTab('non-functional')}
          className={`px-4 py-2 border-b-2 font-medium text-sm whitespace-nowrap ${
            activeTab === 'non-functional'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <Code className="h-4 w-4 mr-1.5" />
            Non-Functional Requirements
          </div>
        </button>
        <button
          onClick={() => setActiveTab('use-case')}
          className={`px-4 py-2 border-b-2 font-medium text-sm whitespace-nowrap ${
            activeTab === 'use-case'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1.5" />
            Use Case Diagram
          </div>
        </button>
        <button
          onClick={() => setActiveTab('component')}
          className={`px-4 py-2 border-b-2 font-medium text-sm whitespace-nowrap ${
            activeTab === 'component'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <Boxes className="h-4 w-4 mr-1.5" />
            Component Diagram
          </div>
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 border-b-2 font-medium text-sm whitespace-nowrap ${
            activeTab === 'architecture'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center">
            <Layers className="h-4 w-4 mr-1.5" />
            Architecture Blueprint
          </div>
        </button>
      </div>

      {/* Tab content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {activeTab === 'functional' && <FunctionalRequirements />}
        {activeTab === 'non-functional' && <NonFunctionalRequirements />}
        {activeTab === 'use-case' && <UseCaseDiagram />}
        {activeTab === 'component' && <ComponentDiagram />}
        {activeTab === 'architecture' && <ArchitectureDiagram />}
      </div>
    </div>
  );
}