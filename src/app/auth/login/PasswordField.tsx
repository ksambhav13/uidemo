import {
  FormControl,
  FormLabel,
  InputProps,
  useDisclosure,
  useMergeRefs,
} from "@chakra-ui/react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import { forwardRef, useRef } from "react";

export const PasswordField = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

    return (
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField.Root>
          <TextField.Input
            size="3"
            id="password"
            ref={mergeRef}
            name="password"
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            required
            {...props}
          />
          <TextField.Slot>
            {isOpen ? (
              <EyeNoneIcon aria-label="Mask password" onClick={onClickReveal} />
            ) : (
              <EyeOpenIcon
                aria-label="Reveal password"
                onClick={onClickReveal}
              />
            )}
          </TextField.Slot>
        </TextField.Root>
      </FormControl>
    );
  }
);

PasswordField.displayName = "PasswordField";
