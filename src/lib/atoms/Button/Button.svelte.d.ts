import { SvelteComponent } from "svelte";
import { BUTTON } from "$lib/config";
declare const __propDef: {
    props: {
        variant?: keyof typeof BUTTON.variants;
        label?: string;
        loading?: boolean;
        skeleton?: boolean;
        disabled?: boolean;
        type?: "button" | "submit" | "reset" | null | undefined;
        color?: keyof typeof BUTTON.colors;
        className?: string;
        dark?: boolean;
        href?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
