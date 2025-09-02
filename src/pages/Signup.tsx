import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  Mail, 
  User, 
  Lock, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Rocket,
  Star,
  Globe
} from 'lucide-react';
import { useSignup } from '../hooks/auth/hook';
import { type SignupRequest } from '../types/auth';
import { emailValidation, signupPasswordValidation, nameValidation } from '../utils/validations';
import Input from '../components/Input';

const Signup: React.FC = () => {
  const signupMutation = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupRequest>();

  const onSubmit = (data: SignupRequest) => {
    signupMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 flex">
      {/* Left Side - Branding/Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-16 right-16 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-8 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 left-8 w-20 h-20 bg-white/15 rounded-full blur-md"></div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold">EasyGenerator</h1>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Start your journey to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                amazing creations
              </span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Join thousands of creators who are building incredible experiences with our intuitive platform.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Rocket className="w-5 h-5 text-yellow-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Quick Start</h3>
                <p className="text-purple-100 text-sm">Get up and running in under 5 minutes</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Globe className="w-5 h-5 text-green-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Global Reach</h3>
                <p className="text-purple-100 text-sm">Deploy worldwide with our CDN network</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Star className="w-5 h-5 text-pink-200" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Premium Templates</h3>
                <p className="text-purple-100 text-sm">Access to 100+ professional templates</p>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-purple-200 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50k+</div>
                <div className="text-purple-200 text-sm">Projects Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-purple-200 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">EasyGenerator</h1>
            </div>
          </div>

          {/* Sign Up Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Join EasyGenerator! 🚀</h2>
              <p className="text-gray-600">Create your account and start building today</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Email Address"
                id="email"
                type="email"
                placeholder="Enter your email address"
                icon={Mail}
                register={register('email', emailValidation)}
                error={errors.email}
              />

              <Input
                label="Full Name"
                id="name"
                type="text"
                placeholder="Enter your full name"
                icon={User}
                register={register('name', nameValidation)}
                error={errors.name}
              />

              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Create a strong password"
                icon={Lock}
                register={register('password', signupPasswordValidation)}
                error={errors.password}
                showPasswordToggle
              />

              <button
                type="submit"
                disabled={isSubmitting || signupMutation.isPending}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                {isSubmitting || signupMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Terms */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our{' '}
                <Link to="/terms" className="text-purple-600 hover:text-purple-700 font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-purple-600 hover:text-purple-700 font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link 
                  to="/signin" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-semibold transition-all duration-200"
                >
                  Sign in now →
                </Link>
              </p>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>Free Forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;