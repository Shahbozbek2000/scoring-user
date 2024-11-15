import { ReactComponent as IconVideo } from '@/assets/icons/video.svg'
import { ReactComponent as IconPersonal } from '@/assets/icons/personal.svg'
import { ReactComponent as IconApply } from '@/assets/icons/apply.svg'

export const pages = [
  {
    id: 1,
    name: 'Videoqo`llanma',
    Icon: IconVideo,
    link: 'main/video-instruction',
    disabled: false,
    show: true,
  },
  {
    id: 2,
    name: 'Shaxsiy ma`lumotlar',
    Icon: IconPersonal,
    link: 'main/personal-information',
    disabled: false,
    show: true,
  },
  { id: 3, name: 'Arizalar', Icon: IconApply, link: 'main/apply', disabled: false, show: true },
]
