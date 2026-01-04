"use client";

export const TopNavBar = () => {
  return (
    <nav className="flex max-w-full justify-center border border-[#ececec] px-3 py-2">
      <div className="flex h-12 max-w-[1600px] grow items-center justify-between rounded-xl ">
        <div className="flex gap-4">
          <a href="/">
            <p>
              <b>Stations</b>
            </p>
          </a>
        </div>
        <ul className="flex gap-4">
          <li className="hover:underline">
            <a href="https://stations.matthewincardona.com">Find Jobs</a>
          </li>
          <li className="hover:underline">
            <a href="https://stations.parser.matthewincardona.com">
              Test Your Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
