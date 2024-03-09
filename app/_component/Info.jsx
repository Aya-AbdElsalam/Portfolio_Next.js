"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
export default function Info() {
  const info = useRef(null);
  const Education = useRef(null);
  const contact = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: info.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../_images/_animation/info.json"),
    });
    lottie.loadAnimation({
      container: Education.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../_images/_animation/education.json"),
    });
    lottie.loadAnimation({
      container: contact.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../_images/_animation/contact.json"),
    });
  }, []);
  return (
    <div className="bg-[url(https://eu-central.storage.cloudconvert.com/tasks/8c4d745e-bfbc-4cd9-80eb-aea96bbc7e6b/bg5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240309%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240309T051037Z&X-Amz-Expires=86400&X-Amz-Signature=2b20500e52a61aed43577d4d765f551d9d6d0775aaf3a4025a8f903f77f56645&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22bg5.webp%22&response-content-type=image%2Fwebp&x-id=GetObject)] bg-cover">
      <div className="container flex flex-wrap py-11">
        <div className="w-64 grow bg-overlay/75 lg:mt-28 border-4 border-bgThird/45">
          <div className="bg-bgThird/45 h-16 relative">
            <div
              ref={info}
              className="rounded-full absolute w-16 h-16 border-4 border-bgThird/45 bg-overlay/75 overflow-hidden"
              style={{
                left: "calc(50% - 30px)",
                top: "50%",
              }}
            ></div>
          </div>
          <div className="mt-10 p-4">
            <p className="border-b-bgThird/45 border-b-4 py-2">
              <span className="text-border"> Data of birth:</span>1/1/2000
            </p>
            <p className="border-b-bgThird/45 border-b-4 py-2">
              <span className="text-border"> Address:</span> Egypt, Damietta,
              Taqsim almuealimin
            </p>
            <p className="border-b-bgThird/45 border-b-4 py-2">
              <span className="text-border"> Phone:</span> 01062371568
            </p>
            <p className=" py-2">
              <span className="text-border"> Email:</span> ayam28040@gmail.com
            </p>
          </div>
        </div>
        <div className="w-64 grow bg-overlay/75 lg:mt-14 lg:mb-14 border-4 border-bgThird/45">
          <div className="bg-bgThird/45 h-16 relative">
            <div
              ref={Education}
              className="rounded-full absolute w-16 h-16 border-4 border-bgThird/45 bg-overlay/75 overflow-hidden"
              style={{
                left: "calc(50% - 30px)",
                top: "50%",
              }}
            ></div>
          </div>
          <div className="mt-10 p-4">
            <h4 className="text-border border-b-2 border-b-border">
              Education
            </h4>
            <p>
              I am graduated from higher institute of engineering and technology
              in new Damietta, electronic and communication department, class
              2023 with GPA 3.37 (B+).
            </p>
          </div>
        </div>
        <div className="w-64 grow bg-overlay/75  lg:mb-28 border-4 border-bgThird/45 ">
          <div className="bg-bgThird/45 h-16 relative">
            <div
              ref={contact}
              className="rounded-full absolute w-16 h-16 border-4 border-bgThird/45 bg-overlay/75 overflow-hidden"
              style={{
                left: "calc(50% - 30px)",
                top: "50%",
              }}
            ></div>
          </div>
          <div className="mt-10 p-4">
            <p>
              Let's connect and build something amazing together! Whether you
              have a project in mind or just want to chat about technology, feel
              free to reach out. I'm excited to collaborate and create impactful
              web experiences..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
