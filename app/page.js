
import Link from 'next/link'
import StudentInfo from './StudentInfo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="text-lg">
      <StudentInfo />
      <Link href="/week2">Week2</Link><br/>
      <Link href="/week3">Week3</Link><br/>
      <Link href="/week4">Week4</Link><br/>
      <Link href="/week5">Week5</Link><br/>
      <Link href="/week6">Week6</Link><br/>
      <Link href="/week7">Week7</Link>
      </div>
      </div>
    </main>
  )
}
