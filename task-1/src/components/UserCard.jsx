import React from "react";

// the UserCard component receives a single `user` object as props from its parent (UserData)
// the user object is destructured immediately for cleaner access to individual fields`
const UserCard = ({
  user: {
    id,
    name,
    username,
    email,
    address: { city },
    phone,
    website,
  },
}) => {
  // SVG icon components for visual enhancement and UI consistency
  const MailIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const PhoneIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.63-5.63A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3c.6 0 .96.4.1.96l2.3 4.28a.5.5 0 0 1-.16.55l-2 2.36a11.13 11.13 0 0 0 7.23 7.23l2.36-2a.5.5 0 0 1 .55-.16l4.28 2.3c.56.14.96.5.96 1.1z"></path>
    </svg>
  );

  const GlobeIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const MapPinIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21.7c-3.7 0-6.7-3-6.7-6.7 0-4.7 6.7-14.3 6.7-14.3s6.7 9.6 6.7 14.3c0 3.7-3 6.7-6.7 6.7z"></path>
      <circle cx="12" cy="11" r="3"></circle>
    </svg>
  );

  return (
    <div className="bg-white p-6 rounded-xl ring-1 ring-gray-100 shadow-sm transition duration-200 ease-in-out hover:shadow-md hover:ring-sky-200 flex flex-col">
      {/* name and username*/}
      <header className="mb-4 pb-3 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          {name}
        </h2>
        <p className="text-sm font-medium text-sky-600 mt-1">
          @{username}{" "}
          <span className="text-gray-400 font-normal ml-2">ID: {id}</span>
        </p>
      </header>

      {/* contact details */}
      <div className="flex-grow space-y-3">
        <div className="flex items-center text-gray-700 text-sm">
          <MailIcon className="text-sky-500 mr-3 shrink-0" />
          <p className="truncate">
            <span className="font-semibold mr-1">Email:</span>
            <a
              href={`mailto:${email}`}
              className="text-sky-600 hover:text-sky-800 transition duration-150 font-medium"
            >
              {email}
            </a>
          </p>
        </div>

        <div className="flex items-center text-gray-700 text-sm">
          <PhoneIcon className="text-sky-500 mr-3 shrink-0" />
          <p className="truncate">
            <span className="font-semibold mr-1">Phone:</span>
            <a
              href={`tel:${phone}`}
              className="text-sky-600 hover:text-sky-800 transition duration-150 font-medium"
            >
              {phone}
            </a>
          </p>
        </div>

        <div className="flex items-center text-gray-700 text-sm">
          <GlobeIcon className="text-sky-500 mr-3 shrink-0" />
          <p className="truncate">
            <span className="font-semibold mr-1">Website:</span>
            <a
              href={`http://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-800 transition duration-150 font-medium"
            >
              {website}
            </a>
          </p>
        </div>
      </div>

      {/* location */}
      <footer className="pt-3 mt-3 border-t border-gray-100">
        <div className="flex items-center text-gray-600">
          <MapPinIcon className="text-gray-500 mr-3 shrink-0" />
          <p className="text-sm font-semibold text-gray-700">
            City: <span className="text-gray-600 font-normal">{city}</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UserCard;
