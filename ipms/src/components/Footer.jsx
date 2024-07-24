import React from "react";

function Footer() {
  return (
    <>
      <div className=" bg-black w-full p-5">
        <div className="footer text-white container mx-auto px-5 flex flex-col">
          <div className="flex flex-row gap-20">
            <div>
              <div className="text-3xl font-bold text-white flex font-saira gap-2 items-center">
                <div className="text-5xl">IPMS</div>
                <div>Digital Library</div>
              </div>
            </div>
            <div className="flex flex-row gap-32">
            <div>
              <div>
                <div><div>Categories</div></div>
                <div><div>Journals</div></div>
                <div><div>Books</div></div>
                <div><div>Proceedings</div></div>
                <div><div>Conferences</div></div>
                <div><div>People</div></div>
              </div>
            </div>
            <div>
            <div>
              <div><div>About</div></div>
              <div><div>About IPSM Digital Library</div></div>
              <div><div>Subscription Information</div></div>
              <div><div>Author Guidelines</div></div>
              <div><div>Digital Library Accessibility</div></div>
            </div>
            </div>

            <div>
              <div>
              <div><div>Join</div></div>
              <div><div>Join IPSM</div></div>
              <div><div>Subscribe to Publications</div></div>
              <div><div>Institutions and Libraries</div></div>
              </div>
            </div>
            </div>
          </div>
          <div className="p-10 flex justify-center items-center">
            <p>© {new Date().getFullYear()} IPMS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
