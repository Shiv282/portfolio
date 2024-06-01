import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ComputerIcon from "@mui/icons-material/Computer";
import TechStackLogos from "./techStack";

export default function Page() {
  return (
    <>
      <div className="main-card dark:bg-zinc-900">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Resume
        </h1>
        <div className="h-1 bg-blue-500 flex-grow w-3/4 mb-5 dark:bg-sky-400"></div>

        <div className="bg-white rounded-md md:w-full">
          <div class="card-container my-5 md:my-2 md:flex md:flex-row">
            <div className="education my-5 mx-5 md:w-full">
              <div className="flex flex-row">
                <SchoolIcon
                  className="text-3xl"
                  style={{
                    fontSize: "32px",
                    stroke: "black",
                    strokeWidth: "2px",
                  }}
                />
                <h2 className=" mx-3 text-2xl font-black text-slate-900">
                  Education
                </h2>
              </div>

              <div className="card flex flex-col mt-3 rounded-lg  bg-zinc-50 dark:bg-zinc-200 px-2 py-2">
                <span className="mx-5 text-l font-bold text-slate-900">
                  BE - ISE [2020 - 2024]
                </span>
                <span className="mx-5 text-l text-slate-900">
                  New Horizon College of Engineering
                </span>
                <span className="mx-5 text-l text-slate-900">CGPA - 8.3</span>
              </div>

              <div className="card flex flex-col mt-3 rounded-lg  bg-zinc-50 dark:bg-zinc-200 px-2 py-2">
                <span className="mx-5 text-l font-bold text-slate-900">
                  Pre University Degree [2018 - 2020]
                </span>
                <span className="mx-5 text-l text-slate-900">
                  Vision PU College
                </span>
                <span className="mx-5 text-l text-slate-900">90.5%</span>
              </div>

              <div className="card flex flex-col mt-3 rounded-lg  bg-zinc-50 dark:bg-zinc-200 px-2 py-2">
                <span className="mx-5 text-l font-bold text-slate-900">
                  X ICSE [2018]
                </span>
                <span className="mx-5 text-l text-slate-900">
                  Amara Jyothi English School
                </span>
                <span className="mx-5 text-l text-slate-900">92.8%</span>
              </div>
            </div>

            <div className="experience mx-5 my-5 md:my-2 md:w-full">
              <div className="flex flex-row">
                <TaskAltIcon
                  className="text-3xl"
                  style={{
                    fontSize: "32px",
                    stroke: "black",
                    strokeWidth: "2px",
                  }}
                />
                <h3 className=" mx-3 text-2xl font-black  text-slate-900">
                  What I do
                </h3>
              </div>
              <div className="card mt-3 rounded-lg bg-zinc-50 dark:bg-zinc-200 px-2 py-2">
                <div className="flex flex-row">
                  <svg
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path>
                    <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"></path>
                  </svg>
                  <span className="ml-5 text-l font-bold text-slate-900">
                    Full stack web development
                  </span>
                </div>
              </div>

              <div className="card my-2 rounded-lg bg-zinc-50 dark:bg-zinc-200 px-2 py-2">
                <div className="flex flex-row">
                  <svg
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path>
                  </svg>
                  <span className="ml-5 text-l font-bold text-slate-900">
                    Mobile App Dev
                  </span>
                </div>
              </div>

              <div className="card my-2 rounded-lg bg-zinc-50 dark:bg-zinc-200 px-2 py-2">
                <div className="flex flex-row">
                  <svg
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 0 1-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 0 1 140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0 1 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"></path>
                  </svg>
                  <span className="ml-5 text-l font-bold text-slate-900">
                    Cloud
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="card-container my-7 flex flex-row">
              <div className="skills mx-5 w-full">
                <div className="flex flex-row">
                  <ComputerIcon
                    className="text-3xl"
                    style={{
                      fontSize: "32px",
                      stroke: "black",
                      strokeWidth: "2px",
                    }}
                  />
                  <h3 className=" mx-3 text-2xl font-black text-slate-900">
                    Worked on
                  </h3>
                </div>
                <div className="bg-zinc-900 rounded-lg py-3 mt-5">
                  <TechStackLogos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
