import React from 'react';

export const ProfileCard = ({ profile }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />

      <div className="relative flex justify-center mb-4 pt-12">
        <div className="relative">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
          />
          {profile.verified && (
            <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1.5 border-2 border-white">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 text-center mb-2">{profile.name}</h2>
      <p className="text-sm text-gray-600 text-center leading-relaxed mb-6 px-2">{profile.bio}</p>

      <div className="space-y-2.5">
        {profile.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group shadow-sm"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
              {link.icon}
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
              {link.label}
            </span>
            <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export const CompactCard = ({ profile }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-lg border border-gray-100 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500" />

      <div className="flex items-start gap-4 pl-3">
        <div className="relative">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-20 h-20 rounded-lg object-cover border-2 border-gray-100 shadow-sm"
          />
          {profile.verified && (
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-white">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{profile.name}</h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">{profile.bio}</p>

          <div className="flex gap-2">
            {profile.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
