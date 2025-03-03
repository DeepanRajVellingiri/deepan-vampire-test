import { 
  CheckSquare, 
  Shield, 
  Users, 
  Bell, 
  BarChart, 
  Clock, 
  Brain,
  FileText,
  Workflow,
  CheckCircle2,
  XCircle,
  Cog
} from 'lucide-react';

export function FunctionalRequirements() {
  const requirements = [
    {
      id: 'fr-1',
      category: 'Permission Management',
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      items: [
        'Allow users to search, browse, and select Microsoft Graph API permissions',
        'Support both Application and Delegated permission types',
        'Provide detailed information about each permission',
        'Allow users to specify justification for each requested permission',
        'Support additional requirements (GLR, API Scan, ASA) for specific permissions',
        'Enable attachment uploads for supporting documentation',
        'Allow users to provide links to relevant resources',
        'Support specification of affected sites for permissions'
      ]
    },
    {
      id: 'fr-2',
      category: 'AI-Powered Assistance',
      icon: <Brain className="h-5 w-5 text-purple-600" />,
      items: [
        'Integrate Azure OpenAI to provide intelligent permission suggestions',
        'Analyze permission context and provide security impact insights',
        'Suggest less-privileged alternatives for high-privilege permissions',
        'Generate code examples in multiple programming languages',
        'Provide implementation guidance based on selected permissions',
        'Explain permission implications in user-friendly language',
        'Cache AI responses for improved performance'
      ]
    },
    {
      id: 'fr-3',
      category: 'Approval Workflow',
      icon: <Workflow className="h-5 w-5 text-green-600" />,
      items: [
        'Implement multi-stage approval workflow (Business, Technical, AM Team)',
        'Support role-based approval assignments',
        'Allow approvers to review permission details and justifications',
        'Enable approvers to approve or deny individual permissions',
        'Support comments for approval/denial decisions',
        'Maintain comprehensive approval history',
        'Automatically transition requests between approval stages',
        'Support implementation status tracking'
      ]
    },
    {
      id: 'fr-4',
      category: 'Notification System',
      icon: <Bell className="h-5 w-5 text-yellow-600" />,
      items: [
        'Send notifications for status changes in permission requests',
        'Notify approvers when requests require their attention',
        'Alert requesters when permissions are approved or denied',
        'Provide implementation notifications',
        'Support in-app notifications',
        'Allow users to configure notification preferences',
        'Maintain notification history'
      ]
    },
    {
      id: 'fr-5',
      category: 'Dashboard & Reporting',
      icon: <BarChart className="h-5 w-5 text-red-600" />,
      items: [
        'Provide comprehensive dashboard for tracking request status',
        'Display metrics on approval times, request volumes, and approval rates',
        'Support filtering by date range, status, and other criteria',
        'Enable CSV export of request data',
        'Show detailed permission approval status',
        'Visualize approval workflow progress',
        'Display approval history and comments'
      ]
    },
    {
      id: 'fr-6',
      category: 'Request Management',
      icon: <FileText className="h-5 w-5 text-indigo-600" />,
      items: [
        'Allow users to submit new permission requests',
        'Support revision of denied permissions',
        'Maintain version history for revised requests',
        'Enable searching for existing requests by ID',
        'Provide detailed view of request status and history',
        'Support cancellation of pending requests',
        'Allow duplication of existing requests'
      ]
    },
    {
      id: 'fr-7',
      category: 'User Management',
      icon: <Users className="h-5 w-5 text-orange-600" />,
      items: [
        'Integrate with Azure Entra ID for authentication',
        'Support role-based access control',
        'Assign appropriate permissions based on user roles',
        'Maintain user profiles and preferences',
        'Support user activity tracking',
        'Enable user-specific views and dashboards'
      ]
    },
    {
      id: 'fr-8',
      category: 'Implementation Tracking',
      icon: <Cog className="h-5 w-5 text-gray-600" />,
      items: [
        'Track implementation status of approved permissions',
        'Allow administrators to mark permissions as implemented',
        'Record implementation details and timestamps',
        'Notify requesters when permissions are implemented',
        'Provide implementation history',
        'Support implementation verification'
      ]
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <CheckSquare className="h-6 w-6 text-blue-600 mr-2" />
          Functional Requirements
        </h2>
        <p className="text-gray-600">
          The Graph Permissions system provides a comprehensive solution for managing, requesting, and approving Microsoft Graph API permissions. Below are the key functional capabilities of the system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {requirements.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center">
                {category.icon}
                <h3 className="ml-2 text-lg font-medium text-gray-900">{category.category}</h3>
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
          <Clock className="h-5 w-5 text-blue-600 mr-2" />
          Request Lifecycle
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300"></div>

          <div className="space-y-6 ml-12">
            <div className="relative">
              <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
              <h4 className="text-md font-medium text-blue-800">1. Request Submission</h4>
              <p className="text-blue-700 mt-1">
                User selects permissions, provides justification, and submits additional requirements.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
              <h4 className="text-md font-medium text-blue-800">2. Business Approval</h4>
              <p className="text-blue-700 mt-1">
                Business approver reviews the request and approves or denies based on business justification.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
              <h4 className="text-md font-medium text-blue-800">3. Technical Approval</h4>
              <p className="text-blue-700 mt-1">
                Technical approver evaluates technical aspects and security implications.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
              <h4 className="text-md font-medium text-blue-800">4. AM Team Approval</h4>
              <p className="text-blue-700 mt-1">
                Final approval stage where AM team reviews and approves the request.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
              <h4 className="text-md font-medium text-blue-800">5. Implementation</h4>
              <p className="text-blue-700 mt-1">
                Approved permissions are implemented in the system.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 mt-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
              <h4 className="text-md font-medium text-blue-800">6. Notification</h4>
              <p className="text-blue-700 mt-1">
                Requester is notified of implementation completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}