import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/portfolio.module.css'

export default function Portfolio(params) {
    const router = useRouter()
    const {
        query: { username }
    } = router

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <Link href="/login">
                    <p>PERFIL</p>
                </Link>
            </div>
            <div>
                <h1>Portfolio</h1>
            </div>
        </div>
    )
}