import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span className={cn('text-foreground text-lg font-bold', className)}>
      Swachta
    </span>
  )
}

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn('text-foreground text-lg font-bold', className)}>
      S
    </span>
  )
}
