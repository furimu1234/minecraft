'use client';


const Title = ({title}: {title: string}) => {
  return <p className="text-center font-bold mb-12 text-cyan-400 text-4xl">{title}</p>
}

const Coop = ({message}: {message: string}) => {
  return <span className="text-yellow-300 font-bold">{message}</span>
}

const Col = ({message}: {message: string}) => {
  return <span className="font-bold text-yellow-300">{message}: </span>
}


const InviteUrl = () => {
  return (
    <div className="items-center border-b border-l border-r mb-12 px-2 text-center pb-4">
      <Title title="招待URL" />
      <a href="https://discord.gg/mZJbMUBqxq" className="text-yellow-300 font-bold text-2xl">Discordには<span className="border-b border-cyan-300">ここから</span>お入りください</a>
      <p>入れない方用: <a href="https://discord.gg/mZJbMUBqxq" target="_blank" className="text-yellow-300 font-bold text-2xl">https://discord.gg/mZJbMUBqxq</a></p>
    </div>
  )
}
const DiscordRule = () => {
  return (
    <div className="items-center border-b border-l border-r mb-12 px-2">
      <Title title="discordルール" />

      <p className="mb-2">・このサーバーはへの招待は自由ですが、<Coop message="他鯖に迷惑がかかること"/>はやめてください</p>
      <p className="mb-2">・他鯖に迷惑がかかった場合は、<Coop message="その人の責任"/>とさせていただきます</p>
      <p className="mb-2">・招待した人は予告・審査をしないで、<Coop message="即正規メンバー扱い"/>にします(招待する前に招待したい人の名前とIDを私に伝えてください)</p>
      <p className="mb-2">・招待した人でも、事前に私の方でNG登録してる人は即キックされます</p>
      <p className="mb-2">・招待後にNGが発覚した場合は、私の方では対応しないので、<Coop message="各自自己防衛"/>してください</p>

      <p className="mb-2">・他人が見て不快に思うような発言・画像貼り付けはしないでください</p>
      <p className="mb-2">・NSFWな画像投稿の禁止</p>
      <p className="mb-2">・無断DM・フレンド申請禁止(必ず相手に許可を取ってください)</p>
      <p className="mb-2">・界隈鯖、界隈ゲーム鯖にいること(あくまで界隈向けのマイクラ鯖です)</p>
      <p className="mb-2">・一定期間discord上で活動がないユーザーは退出処理させていただきます(例外あり)</p>

    </div>
  )
}

const MinecraftRule = () => {
  return (
    <div className="items-center border-b border-l border-r mb-12 px-2">
      <Title title="Minecraftルール" />

      <p className="mb-2">・マイクラ鯖への接続先を<Coop message="このサーバーに所属してない人に流出しないでください" /></p>
      <p className="mb-2">・流出が判明した時は、ワールドの状態を流出判明前にし、ホワイトリスト制にします(登録してないマイクラIDのユーザーは接続できない状態です)</p>
      <p className="mb-2">・この処置により、一部の作業内容が反映されなくなります</p>
      <p className="mb-2">・設定・プラグイン・MOD・アドオンの反映でサーバーを再起動します(事前予告あり)</p>
      <p className="mb-2">・他人に触られたくないチェスト・樽は看板を付け、名前を書いてください(discord名でもマイクラIDでも可)</p>
      <p className="mb-2">・名前のない看板がつけられてないチェスト・樽は共有アイテムにします</p>
      <p className="mb-2">・許可なしに、他人が作った建造物の意図的破壊が発覚した場合は破壊した人をBANします</p>
      <p className="mb-2">・敵MOBを誘導して、爆発等による他人が作った建造物の意図的破壊は目撃証言4回目でBANします</p>
      <p>・手が付けられてない自動生成された建造物の破壊(村など)は自由です(他人が作った建造物がある周辺の村等は破壊しないでください)</p>

    </div>
  )
}


const PluginList = () => {
  return (
    <div className="grid place-items-center border-b border-l border-r text-center h-96">


        <Title title="導入プラグイン一覧" />
        
        <div className="text-left">
          <p className="mb-2"><Col message="名前" /> Minepacks</p>
          <p className="mb-2"><Col message="説明" /> インベントリの拡張・アイテム保守</p>
          <p className="mb-2"><Col message="使用用途" /> 初心者支援・作業効率化</p>
          <p className="mb-2"><Col message="使用方法" /> バックを選択した状態で右クリック</p>
        </div>
    
    </div>

    
  )
}

export default function Home() {
  return (
    <main className=" items-center lg:p-24 w-full">

        <div className="items-center px-2">
          <InviteUrl />
          <DiscordRule />
          <MinecraftRule />
          <PluginList />
        </div>
    </main>
  )
}