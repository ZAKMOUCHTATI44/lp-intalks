/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/multi-select.tsx

import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { Badge } from "./badge";
import { useTranslations } from "next-intl";

/**
 * Variants for the multi-select component to handle different styles.
 * Uses class-variance-authority (cva) to define different styles based on "variant" prop.
 */

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<any> {
  /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
  options: {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    /** Optional icon component to display alongside the option. */
    icon?: string;
  }[];

  /**
   * Callback function triggered when the selected values change.
   * Receives an array of the new selected values.
   */
  onValueChange: (value: string[]) => void;

  /** The default selected values when the component mounts. */
  defaultValue?: string[];

  /**
   * Placeholder text to be displayed when no values are selected.
   * Optional, defaults to "Select options".
   */
  placeholder?: string;

  /**
   * Animation duration in seconds for the visual effects (e.g., bouncing badges).
   * Optional, defaults to 0 (no animation).
   */
  animation?: number;

  /**
   * Maximum number of items to display. Extra selected items will be summarized.
   * Optional, defaults to 3.
   */
  maxCount?: number;

  /**
   * The modality of the popover. When set to true, interaction with outside elements
   * will be disabled and only popover content will be visible to screen readers.
   * Optional, defaults to false.
   */
  modalPopover?: boolean;

  /**
   * If true, renders the multi-select component as a child of another component.
   * Optional, defaults to false.
   */
  asChild?: boolean;

  /**
   * Additional class names to apply custom styles to the multi-select component.
   * Optional, can be used to add custom styles.
   */
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onValueChange,
  defaultValue = [],
  placeholder = "Select options",
  modalPopover = false,
}) => {
  const t = useTranslations("influencerForm");

  const [selectedValues, setSelectedValues] =
    React.useState<string[]>(defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const toggleOption = (option: string) => {
    const newSelectedValues = selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : [...selectedValues, option];
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={setIsPopoverOpen}
      modal={modalPopover}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-transparent border-gray-600 justify-between hover:bg-transparent hover:text-white"
        >
          {selectedValues.length > 0 ? (
            <div className="flex gap-2.5">
              {selectedValues.map((item) => (
                <Badge key={item} className="bg-main text-black">
                  {item}
                </Badge>
                // <Image src={item} alt={item} />
              ))}
            </div>
          ) : (
            <>
              <span className="text-sm text-muted-foreground">
                {placeholder}
              </span>
              <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-[var(--radix-popover-trigger-width)]  border-gray-600"
        align="start"
        onEscapeKeyDown={() => setIsPopoverOpen(false)}
      >
        <Command className="bg-[#1d1d1d] border-0  border-gray-600">
          <CommandList className="bg-[#1d1d1d] text-white border-gray-600">
            <CommandEmpty>{t(`form.platforms.empty`)}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.label);
                return (
                  <CommandItem
                    key={option.label}
                    onSelect={() => toggleOption(option.label)}
                    className="text-white cursor-pointer hover:bg-gray-600"
                  >
                    <Checkbox
                      checked={isSelected}
                      className="data-[state=checked]:bg-main data-[state=checked]:text-black"
                    />
                    {option.icon && (
                      <Image
                        src={option.icon}
                        alt={option.label}
                        width={25}
                        height={25}
                      />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

MultiSelect.displayName = "MultiSelect";

export default MultiSelect;
