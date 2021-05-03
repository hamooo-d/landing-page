const size = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const device = {
  mobile: `@media (max-width: ${size.mobile})`,
  tablet: `@media (max-width: ${size.tablet})`,
  laptop: `@media (max-width: ${size.laptop})`,
  desktop: `@media (max-width: ${size.desktop})`,
}
