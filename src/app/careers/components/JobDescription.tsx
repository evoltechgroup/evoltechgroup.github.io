'use client';
import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { CheckCircle, leftStripe } from '@/assets/svg';

export interface JobDescriptionData {
  title: string;
  experience: string;
  location: string;
  description: string[];
  responsibilities: string[];
  qualifications: string[];
}

interface JobDescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
  jobData: JobDescriptionData;
}

export const JobDescriptionModal: React.FC<JobDescriptionModalProps> = ({
  isOpen,
  onClose,
  onApply,
  jobData
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restore scroll position when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-7xl w-[90vw] max-h-[90vh] overflow-hidden">
        {/* Background decorative stripes */}
        <div className="absolute top-20 left-0 w-20 h-20 md:w-32 md:h-32 lg:w-80 lg:h-80 pointer-events-none z-0">
          <div className="w-full h-full">
            {leftStripe}
          </div>
        </div>
        <div className="absolute bottom-20 right-0 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 pointer-events-none z-0">
          <div className="w-full h-full transform rotate-180">
            {leftStripe}
          </div>
        </div>
        
        {/* Header */}
        <div className="relative z-10 bg-[#E8F4FF] px-6 py-4 border-b">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {jobData.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                <span>{jobData.experience}</span>
                <span className="hidden sm:inline">•</span>
                <span>Location: <span className="font-medium text-gray-900">{jobData.location}</span></span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-1  cursor-pointer"
            >
              <X className="h-8 w-8 hover:text-red-400 text-[#AAAAAA]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 max-h-[60vh]">
          <div className="space-y-8">
            {/* Job Description */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Job Description
              </h2>
              <div className="space-y-4">
                {jobData.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Responsibilities */}
          <section>
  <h2 className="text-lg font-semibold text-gray-900 mb-4">
    Key Responsibilities
  </h2>
  <div className="space-y-3">
    {jobData.responsibilities.map((responsibility, index) => {
      const [title, ...rest] = responsibility.split(":");
      const detail = rest.join(":").trim();

      return (
        <div key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
            {CheckCircle}
          </div>
          <p className="text-gray-600 leading-relaxed flex-1">
            <span className="font-bold text-gray-500">{title}:</span>{" "}
            {detail}
          </p>
        </div>
      );
    })}
  </div>
</section>


            {/* Qualifications */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Qualifications
              </h2>
              <div className="space-y-3">
                {jobData.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
                     {CheckCircle}
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {qualification}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t bg-gray-50 px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onApply}
              className="bg-gray-700 hover:bg-gray-900 text-white font-medium px-8 py-2 rounded-lg cursor-pointer"
            >
              Apply now
            </button>
            <button
              onClick={onClose}
              className="border border-gray-300 hover:bg-gray-200 text-gray-700 px-8 py-2 rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};