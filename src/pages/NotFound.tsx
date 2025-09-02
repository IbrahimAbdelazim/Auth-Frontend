import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertTriangle,
  Compass,
  RefreshCw
} from 'lucide-react';

const NotFound: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="relative mb-12">
          <div className="text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Compass className="w-16 h-16 text-blue-600 animate-spin" style={{animationDuration: '8s'}} />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            The page you're looking for seems to have wandered off into the digital wilderness. 
            Don't worry, even the best explorers get lost sometimes!
          </p>
          <div className="inline-flex items-center space-x-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">This page doesn't exist or has been moved</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              <span>Go to Dashboard</span>
            </Link>
            
            <button
              onClick={handleGoBack}
              className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Try refreshing the page</span>
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            What can you do now?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Dashboard</h3>
              <p className="text-sm text-gray-600">
                Head back to your main dashboard to continue your work
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Search</h3>
              <p className="text-sm text-gray-600">
                Use the search functionality to find what you're looking for
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Refresh</h3>
              <p className="text-sm text-gray-600">
                Sometimes a simple refresh can solve temporary issues
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            If you believe this is an error, please{' '}
            <a href="mailto:support@easygenerator.com" className="text-blue-600 hover:text-blue-700 font-medium">
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
