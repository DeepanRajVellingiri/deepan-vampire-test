import { useState } from 'react';
import { 
  Users, 
  Shield, 
  Brain, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Cog, 
  Bell, 
  BarChart,
  ArrowRight,
  MessageSquare,
  Clock,
  Workflow,
  AlertTriangle
} from 'lucide-react';

export function UseCaseDiagram() {
  const [expandedActor, setExpandedActor] = useState<string | null>('requester');
  const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>('request');

  const actors = [
    {
      id: 'requester',
      name: 'Requester',
      icon: <Users className="h-6 w-6 text-blue-600" />,
      description: 'End users who need Graph API permissions for their applications',
      useCases: [
        'Submit permission requests',
        'View request status',
        'Receive notifications',
        'Revise denied permissions',
        'View implementation status',
        'Access AI suggestions',
        'Upload supporting documentation',
        'View request history'
      ]
    },
    {
      id: 'business-approver',
      name: 'Business Approver',
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      description: 'Reviews business justification for permission requests',
      useCases: [
        'Review permission requests',
        'Approve/deny based on business justification',
        'Add approval comments',
        'Request additional information',
        'View request history',
        'Receive notification of pending approvals',
        'View dashboard metrics'
      ]
    },
    {
      id: 'technical-approver',
      name: 'Technical Approver',
      icon: <Cog className="h-6 w-6 text-green-600" />,
      description: 'Evaluates technical aspects and security implications',
      useCases: [
        'Review technical aspects of requests',
        'Evaluate security implications',
        'Approve/deny based on technical merit',
        'Add technical comments',
        'Request technical clarification',
        'View security assessment',
        'Receive notification of pending technical reviews'
      ]
    },
    {
      id: 'am-team',
      name: 'AM Team',
      icon: <CheckCircle2 className="h-6 w-6 text-red-600" />,
      description: 'Final approvers who implement approved permissions',
      useCases: [
        'Review fully approved requests',
        'Implement approved permissions',
        'Update implementation status',
        'Add implementation notes',
        'Verify implementation',
        'Manage implementation queue',
        'Generate implementation reports'
      ]
    },
    {
      id: 'admin',
      name: 'System Administrator',
      icon: <Cog className="h-6 w-6 text-gray-600" />,
      description: 'Manages system configuration and user access',
      useCases: [
        'Manage user accounts',
        'Configure system settings',
        'Monitor system health',
        'View audit logs',
        'Generate system reports',
        'Manage approval workflows',
        'Configure AI integration'
      ]
    }
  ];

  const workflows = [
    {
      id: 'request',
      title: 'Permission Request Workflow',
      steps: [
        {
          actor: 'Requester',
          action: 'Selects permissions and provides justification',
          details: 'Uses AI assistance to choose appropriate permissions and completes required documentation'
        },
        {
          actor: 'Requester',
          action: 'Submits permission request',
          details: 'Request is validated and enters the approval workflow'
        },
        {
          actor: 'Business Approver',
          action: 'Reviews business justification',
          details: 'Evaluates if the request aligns with business needs and policies'
        },
        {
          actor: 'Business Approver',
          action: 'Approves or denies request',
          details: 'If approved, request moves to technical review; if denied, requester is notified'
        },
        {
          actor: 'Technical Approver',
          action: 'Reviews technical aspects',
          details: 'Evaluates security implications and technical requirements'
        },
        {
          actor: 'Technical Approver',
          action: 'Approves or denies request',
          details: 'If approved, request moves to AM Team; if denied, requester is notified'
        },
        {
          actor: 'AM Team',
          action: 'Reviews implementation requirements',
          details: 'Prepares for implementation of approved permissions'
        },
        {
          actor: 'AM Team',
          action: 'Implements permissions',
          details: 'Configures permissions in the system and updates status'
        },
        {
          actor: 'Requester',
          action: 'Receives implementation notification',
          details: 'Gets notified that permissions have been implemented'
        }
      ]
    },
    {
      id: 'revision',
      title: 'Permission Revision Workflow',
      steps: [
        {
          actor: 'Requester',
          action: 'Receives denial notification',
          details: 'Notified that one or more permissions were denied'
        },
        {
          actor: 'Requester',
          action: 'Reviews denial reasons',
          details: 'Examines comments provided by approvers'
        },
        {
          actor: 'Requester',
          action: 'Revises denied permissions',
          details: 'Updates justification or selects alternative permissions'
        },
        {
          actor: 'Requester',
          action: 'Resubmits revised request',
          details: 'Request enters approval workflow again'
        },
        {
          actor: 'Business Approver',
          action: 'Reviews revised request',
          details: 'Evaluates updated justification or alternative permissions'
        },
        {
          actor: 'Technical Approver',
          action: 'Reviews technical aspects of revision',
          details: 'Evaluates security implications of revised request'
        },
        {
          actor: 'AM Team',
          action: 'Implements approved permissions',
          details: 'Configures permissions after all approvals are complete'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI-Assisted Permission Selection',
      steps: [
        {
          actor: 'Requester',
          action: 'Searches for permissions',
          details: 'Enters search terms or browses permission categories'
        },
        {
          actor: 'System',
          action: 'Sends request to Azure OpenAI',
          details: 'Formats prompt with permission context and user query'
        },
        {
          actor: 'System',
          action: 'Processes AI response',
          details: 'Parses and validates AI suggestions'
        },
        {
          actor: 'Requester',
          action: 'Reviews AI suggestions',
          details: 'Examines suggested permissions and alternatives'
        },
        {
          actor: 'Requester',
          action: 'Views implementation examples',
          details: 'Reviews code examples for selected permissions'
        },
        {
          actor: 'Requester',
          action: 'Selects recommended permissions',
          details: 'Chooses appropriate permissions based on AI guidance'
        }
      ]
    }
  ];

  const getActorIcon = (actorName: string) => {
    const actor = actors.find(a => a.name === actorName);
    return actor ? actor.icon : <Users className="h-5 w-5 text-gray-600" />;
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="h-6 w-6 text-blue-600 mr-2" />
          Use Case Diagram
        </h2>
        <p className="text-gray-600">
          This diagram illustrates the key actors in the system and their interactions with various use cases. It provides a comprehensive view of system functionality from different user perspectives.
        </p>
      </div>

      {/* Visual Use Case Diagram */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-8 overflow-x-auto">
        <div className="min-w-[800px] min-h-[600px] relative">
          {/* System boundary */}
          <div className="absolute inset-0 border-2 border-gray-300 rounded-lg"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1">
            <span className="text-lg font-medium text-gray-700">Graph Permissions System</span>
          </div>

          {/* Use cases */}
          <div className="pt-8 pb-4 px-4 grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-blue-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-blue-200">
                <span className="text-sm font-medium text-blue-800">Submit Permission Request</span>
              </div>
              <div className="bg-blue-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-blue-200">
                <span className="text-sm font-medium text-blue-800">View Request Status</span>
              </div>
              <div className="bg-blue-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-blue-200">
                <span className="text-sm font-medium text-blue-800">Revise Denied Permissions</span>
              </div>
              <div className="bg-blue-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-blue-200">
                <span className="text-sm font-medium text-blue-800">Access AI Suggestions</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6 mt-12">
              <div className="bg-purple-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-purple-200">
                <span className="text-sm font-medium text-purple-800">Review Permission Requests</span>
              </div>
              <div className="bg-purple-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-purple-200">
                <span className="text-sm font-medium text-purple-800">Approve/Deny Permissions</span>
              </div>
              <div className="bg-purple-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-purple-200">
                <span className="text-sm font-medium text-purple-800">Implement Permissions</span>
              </div>
              <div className="bg-purple-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-purple-200">
                <span className="text-sm font-medium text-purple-800">View Dashboard Metrics</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <div className="bg-green-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-green-200">
                <span className="text-sm font-medium text-green-800">Receive Notifications</span>
              </div>
              <div className="bg-green-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-green-200">
                <span className="text-sm font-medium text-green-800">Generate Reports</span>
              </div>
              <div className="bg-green-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-green-200">
                <span className="text-sm font-medium text-green-800">Manage System Settings</span>
              </div>
              <div className="bg-green-50 rounded-full p-4 w-48 h-16 flex items-center justify-center text-center border border-green-200">
                <span className="text-sm font-medium text-green-800">View Audit Logs</span>
              </div>
            </div>
          </div>

          {/* Actors */}
          <div className="flex justify-between mt-8 px-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-medium">Requester</span>
              </div>
              <div className="mt-1 border-t-2 border-blue-300 w-24"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center border border-purple-300">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-medium">Business Approver</span>
              </div>
              <div className="mt-1 border-t-2 border-purple-300 w-24"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center border border-green-300">
                <Cog className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-medium">Technical Approver</span>
              </div>
              <div className="mt-1 border-t-2 border-green-300 w-24"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center border border-red-300">
                <CheckCircle2 className="h-8 w-8 text-red-600" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-medium">AM Team</span>
              </div>
              <div className="mt-1 border-t-2 border-red-300 w-24"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                <Cog className="h-8 w-8 text-gray-600" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-medium">System Administrator</span>
              </div>
              <div className="mt-1 border-t-2 border-gray-300 w-24"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Actor Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {actors.map((actor) => (
          <div 
            key={actor.id} 
            className={`bg-white rounded-lg shadow-sm border-2 overflow-hidden transition-all duration-300 ${
              expandedActor === actor.id ? `border-${actor.id === 'requester' ? 'blue' : actor.id === 'business-approver' ? 'purple' : actor.id === 'technical-approver' ? 'green' : actor.id === 'am-team' ? 'red' : 'gray'}-400 shadow-md` : 'border-gray-200'
            }`}
            onClick={() => setExpandedActor(expandedActor === actor.id ? null : actor.id)}
          >
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {actor.icon}
                  <h3 className="ml-2 text-lg font-medium text-gray-900">{actor.name}</h3>
                </div>
                {expandedActor === actor.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <p className="mt-1 text-sm text-gray-600">{actor.description}</p>
            </div>
            {expandedActor === actor.id && (
              <div className="px-4 py-5 sm:p-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Use Cases:</h4>
                <ul className="space-y-2">
                  {actor.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Workflow Diagrams */}
      <div className="space-y-8">
        {workflows.map((workflow) => (
          <div 
            key={workflow.id} 
            className={`bg-white rounded-lg shadow-sm border-2 overflow-hidden transition-all duration-300 ${
              expandedWorkflow === workflow.id ? `border-${workflow.id === 'request' ? 'blue' : workflow.id === 'revision' ? 'purple' : 'green'}-400 shadow-md` : 'border-gray-200'
            }`}
            onClick={() => setExpandedWorkflow(expandedWorkflow === workflow.id ? null : workflow.id)}
          >
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Workflow className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">{workflow.title}</h3>
                </div>
                {expandedWorkflow === workflow.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
            {expandedWorkflow === workflow.id && (
              <div className="px-4 py-5 sm:p-6">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300"></div>

                  <div className="space-y-8 ml-12">
                    {workflow.steps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-2">
                            {step.actor === 'System' ? (
                              <Cog className="h-5 w-5 text-gray-600 mr-2" />
                            ) : (
                              getActorIcon(step.actor)
                            )}
                            <span className="font-medium text-gray-900">{step.actor}</span>
                          </div>
                          <h4 className="text-md font-medium text-gray-800">{step.action}</h4>
                          <p className="text-sm text-gray-600 mt-1">{step.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* System Interactions */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
          <Workflow className="h-5 w-5 text-blue-600 mr-2" />
          System Interactions Overview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h4 className="text-md font-medium text-blue-900 mb-4">Permission Request Flow</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800 font-medium">Requester → System</p>
                  <p className="text-sm text-blue-700">Submits permission request with justification</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800 font-medium">System → Business Approver</p>
                  <p className="text-sm text-blue-700">Routes request for business approval</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800 font-medium">Business Approver → System</p>
                  <p className="text-sm text-blue-700">Approves or denies with comments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800 font-medium">System → Technical Approver</p>
                  <p className="text-sm text-blue-700">Routes approved request for technical review</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800 font-medium">Technical Approver → System</p>
                  <p className="text-sm text-blue-700">Approves or denies with technical assessment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="text-md font-medium text-green-900 mb-4">AI Integration Flow</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800 font-medium">Requester → System</p>
                  <p className="text-sm text-green-700">Searches for or selects permissions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800 font-medium">System → Azure OpenAI</p>
                  <p className="text-sm text-green-700">Sends permission context for analysis</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800 font-medium">Azure OpenAI → System</p>
                  <p className="text-sm text-green-700">Returns suggestions and code examples</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800 font-medium">System → Requester</p>
                  <p className="text-sm text-green-700">Displays AI-powered suggestions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800 font-medium">Requester → System</p>
                  <p className="text-sm text-green-700">Selects recommended permissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom ChevronUp component
function ChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w orld.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

// Custom ChevronDown component
function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}