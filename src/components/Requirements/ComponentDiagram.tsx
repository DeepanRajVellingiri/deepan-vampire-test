import { useState } from 'react';
import { 
  Boxes, 
  Layers, 
  Code, 
  Database, 
  Shield, 
  Brain, 
  Bell, 
  BarChart, 
  Server, 
  Globe,
  ArrowRight,
  Users,
  Lock,
  FileText,
  Workflow
} from 'lucide-react';

export function ComponentDiagram() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const components = {
    ui: {
      title: 'Portal UI Components',
      icon: <Layers className="h-5 w-5 text-blue-600" />,
      color: 'blue',
      description: 'Frontend components that make up the user interface',
      subcomponents: [
        { name: 'Permission Selection', description: 'Interface for browsing and selecting Graph API permissions' },
        { name: 'Approval Management', description: 'UI for reviewing and approving permission requests' },
        { name: 'Dashboard & Analytics', description: 'Visualization of request metrics and status' },
        { name: 'Notification Center', description: 'Interface for viewing and managing notifications' },
        { name: 'AI Suggestion Interface', description: 'UI for displaying AI-powered permission suggestions' }
      ],
      dependencies: ['api', 'ai']
    },
    api: {
      title: 'API Layer Components',
      icon: <Code className="h-5 w-5 text-purple-600" />,
      color: 'purple',
      description: 'API endpoints and service interfaces',
      subcomponents: [
        { name: 'Permission API', description: 'Endpoints for permission management' },
        { name: 'Approval API', description: 'Endpoints for approval workflow' },
        { name: 'User API', description: 'Endpoints for user management' },
        { name: 'Analytics API', description: 'Endpoints for metrics and reporting' },
        { name: 'Notification API', description: 'Endpoints for notification management' }
      ],
      dependencies: ['business', 'external']
    },
    business: {
      title: 'Business Logic Layer',
      icon: <Workflow className="h-5 w-5 text-green-600" />,
      color: 'green',
      description: 'Core business logic and workflow processing',
      subcomponents: [
        { name: 'Approval Workflow Engine', description: 'Manages approval stages and transitions' },
        { name: 'Permission Validation', description: 'Validates permission requests against policies' },
        { name: 'Notification Service', description: 'Generates and manages notifications' },
        { name: 'Analytics Engine', description: 'Processes and aggregates metrics data' },
        { name: 'Audit Logging', description: 'Records system activities for compliance' }
      ],
      dependencies: ['data', 'ai']
    },
    data: {
      title: 'Data Layer',
      icon: <Database className="h-5 w-5 text-red-600" />,
      color: 'red',
      description: 'Data storage and management components',
      subcomponents: [
        { name: 'Permission Repository', description: 'Stores permission definitions and metadata' },
        { name: 'Request Repository', description: 'Stores permission requests and approval status' },
        { name: 'User Repository', description: 'Stores user profiles and preferences' },
        { name: 'Audit Repository', description: 'Stores audit logs and compliance data' },
        { name: 'Analytics Repository', description: 'Stores metrics and reporting data' }
      ],
      dependencies: []
    },
    external: {
      title: 'External Service Integrations',
      icon: <Globe className="h-5 w-5 text-yellow-600" />,
      color: 'yellow',
      description: 'Integrations with external services and APIs',
      subcomponents: [
        { name: 'Microsoft Graph API', description: 'Integration for implementing permissions' },
        { name: 'Azure Entra ID', description: 'Authentication and user management' },
        { name: 'Email Service', description: 'For sending notification emails' },
        { name: 'Azure Monitor', description: 'For system monitoring and alerts' },
        { name: 'Azure Key Vault', description: 'For secure credential management' }
      ],
      dependencies: []
    },
    ai: {
      title: 'AI Components',
      icon: <Brain className="h-5 w-5 text-indigo-600" />,
      color: 'indigo',
      description: 'AI-powered components for intelligent suggestions',
      subcomponents: [
        { name: 'Azure OpenAI Client', description: 'Integration with Azure OpenAI service' },
        { name: 'Prompt Engineering', description: 'Crafts effective prompts for AI responses' },
        { name: 'Response Processing', description: 'Processes and validates AI responses' },
        { name: 'Suggestion Engine', description: 'Generates permission suggestions' },
        { name: 'Code Generation', description: 'Generates implementation code examples' }
      ],
      dependencies: ['external']
    }
  };

  const renderDependencyLines = () => {
    if (!activeComponent) return null;
    
    const deps = components[activeComponent as keyof typeof components].dependencies;
    
    return deps.map(dep => {
      const fromPos = document.getElementById(`component-${activeComponent}`)?.getBoundingClientRect();
      const toPos = document.getElementById(`component-${dep}`)?.getBoundingClientRect();
      
      if (!fromPos || !toPos) return null;
      
      // Calculate relative positions
      const containerPos = document.getElementById('component-diagram-container')?.getBoundingClientRect();
      if (!containerPos) return null;
      
      const fromX = (fromPos.left + fromPos.right) / 2 - containerPos.left;
      const fromY = fromPos.bottom - containerPos.top;
      const toX = (toPos.left + toPos.right) / 2 - containerPos.left;
      const toY = toPos.top - containerPos.top;
      
      return (
        <svg
          key={`${activeComponent}-${dep}`}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#4B5563" />
            </marker>
          </defs>
          <path
            d={`M${fromX},${fromY} C${fromX},${(fromY + toY) / 2} ${toX},${(fromY + toY) / 2} ${toX},${toY}`}
            stroke="#4B5563"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      );
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Boxes className="h-6 w-6 text-blue-600 mr-2" />
          Component Diagram
        </h2>
        <p className="text-gray-600">
          This diagram illustrates the structural view of the Graph Permissions system, showing the main components, their relationships, and dependencies.
        </p>
      </div>

      <div id="component-diagram-container" className="relative bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(components).map(([key, component]) => (
            <div
              id={`component-${key}`}
              key={key}
              className={`border-2 rounded-lg p-4 transition-all duration-300 ${
                activeComponent === key
                  ? `border-${component.color}-500 shadow-lg`
                  : `border-gray-200 hover:border-${component.color}-300 hover:shadow-md`
              }`}
              onClick={() => setActiveComponent(activeComponent === key ? null : key)}
            >
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-full bg-${component.color}-100 flex items-center justify-center mr-3`}>
                  {component.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{component.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{component.description}</p>
              
              {activeComponent === key && (
                <div className="mt-4 space-y-3">
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Subcomponents</h4>
                  <ul className="space-y-2">
                    {component.subcomponents.map((sub, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-${component.color}-500 mt-1.5 mr-2`}></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{sub.name}</p>
                          <p className="text-xs text-gray-500">{sub.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  {component.dependencies.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Dependencies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {component.dependencies.map(dep => (
                          <span
                            key={dep}
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${components[dep as keyof typeof components].color}-100 text-${components[dep as keyof typeof components].color}-800`}
                          >
                            {components[dep as keyof typeof components].title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Component Relationships Visualization */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Component Relationships</h3>
          
          <div className="relative">
            {/* UI Layer */}
            <div className="flex justify-center mb-16">
              <div className="w-64 p-4 bg-blue-100 rounded-lg border border-blue-300 text-center">
                <Layers className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium text-blue-900">Portal UI Components</h4>
              </div>
            </div>
            
            {/* API Layer */}
            <div className="flex justify-center mb-16">
              <div className="w-64 p-4 bg-purple-100 rounded-lg border border-purple-300 text-center">
                <Code className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium text-purple-900">API Layer Components</h4>
              </div>
            </div>
            
            {/* Business Logic Layer */}
            <div className="flex justify-center mb-16">
              <div className="w-64 p-4 bg-green-100 rounded-lg border border-green-300 text-center">
                <Workflow className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium text-green-900">Business Logic Layer</h4>
              </div>
            </div>
            
            {/* Data & External Services Layer */}
            <div className="flex justify-center gap-16">
              <div className="w-64 p-4 bg-red-100 rounded-lg border border-red-300 text-center">
                <Database className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <h4 className="font-medium text-red-900">Data Layer</h4>
              </div>
              
              <div className="w-64 p-4 bg-yellow-100 rounded-lg border border-yellow-300 text-center">
                <Globe className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-medium text-yellow-900">External Services</h4>
              </div>
            </div>
            
            {/* AI Components (to the side) */}
            <div className="absolute right-0 top-1/3 transform -translate-y-1/2">
              <div className="w-64 p-4 bg-indigo-100 rounded-lg border border-indigo-300 text-center">
                <Brain className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <h4 className="font-medium text-indigo-900">AI Components</h4>
              </div>
            </div>
            
            {/* Arrows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* UI to API */}
              <svg className="absolute top-0 left-0 w-full h-full">
                <defs>
                  <marker id="arrowhead-1" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                  </marker>
                </defs>
                <line x1="50%" y1="12%" x2="50%" y2="24%" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead-1)" />
              </svg>
              
              {/* API to Business */}
              <svg className="absolute top-0 left-0 w-full h-full">
                <defs>
                  <marker id="arrowhead-2" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                  </marker>
                </defs>
                <line x1="50%" y1="36%" x2="50%" y2="48%" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead-2)" />
              </svg>
              
              {/* Business to Data */}
              <svg className="absolute top-0 left-0 w-full h-full">
                <defs>
                  <marker id="arrowhead-3" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                  </marker>
                </defs>
                <line x1="40%" y1="60%" x2="40%" y2="72%" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead-3)" />
              </svg>
              
              {/* Business to External */}
              <svg className="absolute top-0 left-0 w-full h-full">
                <defs>
                  <marker id="arrowhead-4" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                  </marker>
                </defs>
                <line x1="60%" y1="60%" x2="60%" y2="72%" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead-4)" />
              </svg>
              
              {/* Business to AI */}
              <svg className="absolute top-0 left-0 w-full h-full">
                <defs>
                  <marker id="arrowhead-5" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                  </marker>
                </defs>
                <path d="M55%,54% C70%,54% 70%,33% 80%,33%" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-5)" />
              </svg>
              
              {/* AI to UI */}
              <svg className="absolute top-0 left-0 w-full h-full">
                <defs>
                  <marker id="arrowhead-6" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                  </marker>
                </defs>
                <path d="M80%,28% C70%,28% 70%,8% 55%,8%" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-6)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Component Legend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(components).map(([key, component]) => (
            <div key={key} className="flex items-center">
              <div className={`w-8 h-8 rounded-full bg-${component.color}-100 flex items-center justify-center mr-3`}>
                {component.icon}
              </div>
              <span className="text-sm text-gray-700">{component.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}