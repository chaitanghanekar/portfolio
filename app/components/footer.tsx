import IconContacts from '../icons/IconContacts';
import IconGithub from '../icons/IconGithub';

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-4 flex flex-row flex-wrap space-x-4 space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover-secondary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/chaitan/"
          >
            <IconContacts width={24} height={24} fill="currentColor" />
            <p className="ml-1 h-7">connect</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover-secondary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/chaitanghanekar"
          >
            <IconGithub width={24} height={24} fill="currentColor"/>
            <p className="ml-1 h-7">github</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
