import Link from 'next/link';

export default function MainNav() {
  const options = [
    {
      'name': 'Home',
      'link': '/',
    },
    {
      'name': 'Gacha Editor',
      'link': 'gacha',
    },
    {
      'name': 'Users',
      'link': 'users',
    },
    {
      'name': 'Characters',
      'link': 'characters',
    },
    {
      'name': 'Guilds',
      'link': 'guilds',
    },
  ];

  return (
    <>
      <div className='bg-surface min-h-screen max-h-full w-72 p-5 flex-shrink-0'>
        <ul className='flex flex-col gap-2 font-bold'>
          {options.map(option => (
            <li key={option.name}>
              <Link href={option.link}>
                <div className='w-full hover:brightness-150 active:brightness-75'>
                  {option.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
