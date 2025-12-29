"use client";

export const TopNavBar = () => {
  return (
    <nav className="m-3 flex max-w-full justify-center text-white">
      <div className="flex h-12 max-w-[1600px] grow items-center justify-between rounded-xl bg-[#4C73F2] p-8">
        <div className="flex gap-4">
          <a href="/">
            <p>
              <b>Stations</b>
            </p>
          </a>
          <p>Entry Level Jobs For Tech People</p>
        </div>
        <ul className="flex gap-4">
          <li className="underline">
            <a href="https://stations.matthewincardona.com">Find Jobs</a>
          </li>
          <li className="underline">
            <a href="https://stations.parser.matthewincardona.com">
              Test Your Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
