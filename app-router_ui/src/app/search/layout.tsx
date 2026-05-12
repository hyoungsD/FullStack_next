import Searchbar from '../../components/SearchBar'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <Searchbar />
      {children}
    </section>
  );
}