
import Link from 'next/link'
import StudentInfo from './StudentInfo'

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Week2</Link> <br />
      <Link href="/week3">Week3</Link>
    </main>
  )
}
