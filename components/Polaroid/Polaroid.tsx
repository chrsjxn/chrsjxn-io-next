import styles from './Polaroid.module.css'
import Image, { StaticImageData } from 'next/image'

const styleMapping: Record<string, string> = {
  'vignette': styles.vignette,
  'drama': styles.drama,
}

export function Polaroid({ src, alt, style, children }: {
  src: string | StaticImageData,
  alt: string,
  style: string,
  children: React.ReactNode
}) {
  const wrapperClasses = `${styles.wrapper} ${styleMapping[style] || ''}`

  return <div className={styles.polaroid}>
	<div className={wrapperClasses}>
    <Image src={src} alt={alt} />
  </div>
	<div className={styles.caption}>
		{children}
	</div>
</div>
}
