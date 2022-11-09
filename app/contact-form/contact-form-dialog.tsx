"use client";

import { PaperPlaneTilt } from "phosphor-react";
import { useState } from "react";

import { ContactForm } from "~/contact-form";
import { Button, ButtonProps } from "~/ui/button";
import { Card } from "~/ui/card";
import { Dialog } from "~/ui/dialog";
import { Toast } from "~/ui/toast";

type Props = {
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
};

export function ContactFormDialog({ buttonSize, buttonVariant }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  return (
    <>
      <Dialog
        onOpenChange={(open) => setIsDialogOpen(open)}
        open={isDialogOpen}
      >
        <Dialog.Trigger asChild>
          <Button
            iconLeft={PaperPlaneTilt}
            size={buttonSize}
            variant={buttonVariant}
          >
            Contact
          </Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Card>
            <Dialog.Title>Contact me</Dialog.Title>

            <Dialog.Description>
              Please leave your details below and I&apos;ll get back to you as
              soon as possible. I aim to reply within 12 hours.
            </Dialog.Description>

            <ContactForm
              onSubmitted={() => {
                setIsDialogOpen(false);
                setIsToastOpen(true);
              }}
            />
          </Card>
        </Dialog.Content>
      </Dialog>

      <Toast
        onOpenChange={(open) => {
          setIsToastOpen(open);
        }}
        open={isToastOpen}
      >
        <Toast.Title>Inquiry submitted</Toast.Title>

        <Toast.Description>
          Your inquiry was received and will be answered as soon as possible
        </Toast.Description>
      </Toast>
    </>
  );
}
