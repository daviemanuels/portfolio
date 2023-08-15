import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
      accusamus culpa repellat sed, at modi totam alias ab dicta aliquid ad.
      Eum, voluptate harum praesentium ducimus cumque explicabo fugit
      distinctio?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=daviemanuels&show_icons=true&theme=onedark&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=daviemanuels&layout=compact&langs_count=7&theme=onedark" />
    </GithubSecao>
  </section>
)

export default Sobre
