import styles from './styles';
import { useSession } from 'next-auth/client';
import { GitHub } from '@/src/assets/svg-inline';

function HeaderSignIn(): JSX.Element {
  const [session, loading] = useSession();

  if (loading || session) return <></>;

  return (
    <a className="git" aria-label="go to github" href="https://github.com/varbachakov/rcoh">
      add hook
      <GitHub />

      <style jsx>
        {styles}
      </style>
    </a>
  );
}

export default HeaderSignIn;
