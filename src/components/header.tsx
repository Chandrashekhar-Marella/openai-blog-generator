import Link from 'next/link'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const header = () =>
{
    return (
        <header className='py-6'>
            <div className='container flex max-w-7xl items-center justify-between'>
                <Link href='/'>
                    <Logo />
                </Link>

                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                </SignedIn>

                <SignedOut>
                    <SignInButton mode="modal">
                        <Button size='sm' variant='ghost'>
                            Sign in
                        </Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </header>
    )
}

export default header