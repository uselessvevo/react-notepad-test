import { ButtonPin, ButtonProps } from "@gravity-ui/uikit"

export interface ControlPanelProps {};
export interface ScreensProps extends ButtonProps {
    icon: any
    title: string
    href?: string
    class?: string
}