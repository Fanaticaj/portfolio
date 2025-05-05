"use client";

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useRef, useState } from "react";

export function ContactMe() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Contact Me</Button>
      <Modal
        show={openModal}
        size="sm"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <ModalHeader className="bg-gray-700" />
        <ModalBody className="bg-gray-700">
          <div className="space-y-2 bg-gray-700">
            <h3 className="mt-2 flex items-center justify-center text-3xl font-light uppercase italic text-gray-300">
              Say Hi!
            </h3>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  className="text-md font-mono font-extralight lowercase italic text-gray-300"
                >
                  Your email
                </Label>
              </div>
              <Textarea
                id="email"
                ref={emailInputRef}
                placeholder="name@company.com"
                required
                rows={1}
                className="resize-none bg-gray-800 text-gray-300"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label className="text-md font-mono font-extralight lowercase italic text-gray-300">
                  What's on your mind?
                </Label>
              </div>
              <Textarea
                id="description"
                placeholder="Wow Anthony, great porfolio."
                rows={5}
                className="bg-gray-800 text-gray-300"
              />
            </div>
          </div>
          <div className="mt-6 w-full">
            <Button className="bg-gray-800">Send!</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
