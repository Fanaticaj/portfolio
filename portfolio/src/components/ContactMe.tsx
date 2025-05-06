"use client";

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Textarea,
} from "flowbite-react";
import { useState } from "react";

export function ContactMe() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!email || !message) {
      alert("Please fill out both fields.");
      return;
    }

    // This is where your Amplify Gen2 integration will go
    console.log("Preparing to send:", { email, message });

    // Example placeholder (eventually call your Amplify API endpoint)
    try {
      // await fetch("/amplify/api/contact", {
      //   method: "POST",
      //   body: JSON.stringify({ email, message }),
      //   headers: { "Content-Type": "application/json" },
      // });

      alert("Message sent successfully!");
      setOpenModal(false);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <Button color="gray" onClick={() => setOpenModal(true)}>
        Contact Me
      </Button>

      <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg" popup>
        <div className="relative rounded-lg bg-gray-800 shadow-lg border border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-700 rounded-t">
            <h3 className="text-xl font-semibold text-white">Say Hi!</h3>
            <button
              onClick={() => setOpenModal(false)}
              type="button"
              className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Body */}
          <ModalBody className="p-4 md:p-5 space-y-5 text-gray-300">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-mono font-light lowercase italic text-gray-300"
              >
                your email
              </Label>
              <Textarea
                id="email"
                placeholder="name@company.com"
                rows={1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="resize-none bg-gray-900 text-gray-300 mt-1"
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-sm font-mono font-light lowercase italic text-gray-300"
              >
                what's on your mind?
              </Label>
              <Textarea
                id="message"
                placeholder="Wow Anthony, great portfolio."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-900 text-gray-300 mt-1"
              />
            </div>
          </ModalBody>

          {/* Footer */}
          <ModalFooter className="flex justify-end p-4 md:p-5 border-t border-gray-700 rounded-b">
            <Button onClick={handleSend} className="bg-gray-700 hover:bg-gray-600 text-white">
              Send!
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}
