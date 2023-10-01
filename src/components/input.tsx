import { tv } from 'tailwind-variants';

const input = tv({
    base: "flex w-full h-full font-sm bg-darkGrey-500 rounded-md focus:outline-none px-2 py-0.5",
    variants: {
        color: {
            primary: "bg-transparent text-primary-500 border-b-darkGrey-500 border-b-2 placeholder:text-primary-500",
            secondary: "bg-none-500 text-primary-500 font-audiowide",
            third: "bg-white text-primary-500 rounded-3xl border border-primary-500",
            disabledOne: "bg-lightGrey-500",
            disabledTwo: "bg-white text-lightGrey-500 rounded-3xl border border-lightGrey-500",
            success: "bg-emerald-500 text-white",
            loading: "bg-pink-600 text-white",
        },
    }
});

export default function Input(props: any) {
    return (
        <input className={input(props)} type={props.type} placeholder={props.placeholder} />
    )
}