import { ComponentProps, ElementType } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { CiCircleCheck } from 'react-icons/ci'
import { CgSpinnerTwoAlt } from 'react-icons/cg'

import "@fontsource/audiowide";


const button = tv({
    base: "flex items-center justify-center font-medium bg-zinc-500 text-white rounded-full m-2 active:opacity-80",
    variants: {
        color: {
            primary: "bg-primary-500 text-white font-audiowide",
            secondary: "bg-none-500 text-primary-500 font-audiowide",
            third: "bg-red-500 text-white",
            success: "bg-emerald-500 text-white",
            loading: "bg-pink-600 text-white",
        },
    }
});

type BtnProps = ComponentProps<'button'> & VariantProps<typeof button> & {
    success?: boolean;
    loading?: boolean;
    icon?: ElementType | null;
}

export default function Button({
    success = false,
    loading = false,
    icon: Icon,
    color,
    ...props
}: BtnProps) {
    return (
        <button className={button({ color })} {...props}>
            {success && !loading ? <CiCircleCheck className='h-4 w-4' /> :
                !success && loading ? (
                    <>
                        <CgSpinnerTwoAlt className='h-4 w-4 animate-spin transition-all' />
                        <p className='p-2'>Carregando..</p>
                    </>
                ) : Icon && <Icon className='h-4 w-4' />}
            {props.children}
        </button>
    )
}