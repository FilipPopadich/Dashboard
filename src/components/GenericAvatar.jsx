import { User } from 'lucide-react'

export default function GenericAvatar({ color, size = 64, iconRatio = 0.5 }) {
    return (
        <div
            className="mp-avatar"
            style={{
                width: size,
                height: size,
                '--pc': color,
            }}
        >
            <User size={Math.round(size * iconRatio)} strokeWidth={1.75} aria-hidden="true" />
        </div>
    )
}