import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import ButtonLink from '@/components/ ButtonLink'
import Bounded from '@/components/Bounded'
import StarGrid from '@/components/StarGrid'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='bg-[#070815]'
    >
      <div className='relative'>
        <StarGrid />
        <PrismicRichText field={slice.primary.heading} />
        <PrismicRichText field={slice.primary.body} />
        <ButtonLink field={slice.primary.buttonlink}>
          {slice.primary.buttonlabel}
        </ButtonLink>
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </Bounded>
  )
}

export default Hero
