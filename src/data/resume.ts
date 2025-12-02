import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  profile: {
    name: "Gensui Kawaguchi",
    title: "Frontend Engineer / Product Engineer",
    email: "gensui0530@gmail.com",
    location: "Saitama, Japan",
    summary:
      "言語聴覚士として8年間の臨床経験を経て、ソフトウェアエンジニアへキャリアチェンジ。現在はUI/UXエンジニアとして、プロダクトの成長と開発体験の向上に貢献しています。",
    avatar: "/profile-image.png",
    social: [
      {
        platform: "github",
        url: "https://github.com/gensui0530",
        label: "GitHub",
      },
      {
        platform: "email",
        url: "mailto:gensui0530@gmail.com",
        label: "Email",
      },
    ],
  },
  contact: {
    workStyles: ["フルリモート可", "副業・業務委託相談可"],
    interests: [
      "デザインシステム",
      "フロントエンド設計・品質改善",
      "AI駆動開発",
      "プロダクトマネジメント",
    ],
    domains: ["医療・ヘルスケア", "HR・人材"],
    responseTime: "通常1〜2営業日以内に返信いたします",
    casualMessage: "まずはお気軽にお話ししましょう！",
  },
  vision: {
    goal: "ビジネスと技術を繋ぎ、プロダクトの成長を牽引するUI/UXエンジニア・プロダクトマネージャーを目指しています。ユーザー視点を第一に考え、要件定義から設計・実装まで一貫して携わった経験を活かすことで、事業成功に貢献したいです。",
    philosophy:
      "「どうすれば事業が成功するか」を起点に考え、技術でビジネス課題を解決することを大切にしています。良いプロダクトは、良い開発環境から生まれると信じています。",
    contributions: [
      {
        target: "事業",
        stance: "ビジネス課題を技術で解決し、事業成長に直結する成果を出す",
      },
      {
        target: "チーム",
        stance: "仕組みを作り、チーム全体の生産性を最大化する",
      },
      {
        target: "プロダクト",
        stance: "0→1でスケーラブルな基盤を構築し、品質と開発体験を向上させる",
      },
    ],
  },
  strengths: [
    {
      id: "strength-1",
      title: "医療職で培った対人スキル",
      subtitle: "傾聴力と多様なケースへの柔軟な対応",
      points: [
        "8年間の臨床経験で患者・家族との信頼関係構築",
        "多職種連携（医師・看護師・PT・OT）でのコミュニケーション",
        "一人ひとりのニーズに応じた課題解決アプローチ",
        "アカデミックな視点での問題分析とエビデンスに基づく提案",
      ],
      icon: "users",
    },
    {
      id: "strength-2",
      title: "ビジネスと技術を繋ぐ視点",
      subtitle: "「事業が成功するには」を起点に考える",
      points: [
        "ユーザーヒアリングから仕様策定までの上流工程",
        "プロダクトチーム間の連携",
        "ステークホルダーとの期待値調整・スコープ管理",
        "技術的意思決定をビジネス価値で判断",
      ],
      icon: "lightbulb",
    },
    {
      id: "strength-3",
      title: "自走力と当事者意識",
      subtitle: "一人でも前に進める推進力",
      points: [
        "エンジニア1人体制でプロジェクトを完遂した経験",
        "課題を見つけ、提案し、実行に移す主体性",
        "新人メンバーのサポート・オンボーディング経験",
        "継続的な学習とスキルアップへの意欲",
      ],
      icon: "rocket",
    },
  ],
  experiences: [
    {
      id: "exp-1",
      company: "WHITE CROSS株式会社",
      position: "Lead Frontend Engineer",
      startDate: "2023-07",
      endDate: null,
      description: "歯科技工SaaSの新規開発にてフロントエンドリードを担当。",
      achievements: [
        "デザインシステムを3ヶ月で0→1構築、開発効率と品質を向上",
        "テストカバレッジ 6% → 30%、ESLintエラー 2500件 → 800件に削減",
        "Four Keys指標でデプロイ頻度・リードタイムをHigh、障害率・修復時間をElite達成",
        "Figma MCP連携によるAI駆動開発を推進し、実装速度を大幅改善",
      ],
      technologies: ["TypeScript", "React", "Vite", "Jotai", "Vitest", "AWS"],
    },
    {
      id: "exp-2",
      company: "WHITE CROSS株式会社",
      position: "Product Engineer / PM",
      startDate: "2021-05",
      endDate: "2023-06",
      description: "歯科専門求人サイトの開発・プロジェクトマネジメントを担当。",
      achievements: [
        "収益モデル転換プロジェクトを要件定義からリリースまで一人で主導",
        "SEO施策で主要キーワード検索順位を17位 → 6位に改善",
        "PHP 7→8、Laravel 8→10、MySQL 5.7→8.0の大規模バージョンアップを完遂",
        "HTMLメール改善でメール経由応募数を0件 → 月平均3件に向上",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Elasticsearch", "AWS"],
    },
    {
      id: "exp-3",
      company: "医療法人秀友会 札幌秀友会病院",
      position: "言語聴覚士（リーダー）",
      startDate: "2018-02",
      endDate: "2021-03",
      description: "脳神経外科・回復期・ICU病棟での早期リハビリテーション介入。",
      achievements: [
        "リハビリチームのリーダーとして業務改善を推進",
        "高次脳機能障害学会にて複数の研究発表",
      ],
      technologies: [],
    },
    {
      id: "exp-4",
      company: "医療法人社団輝生会 初台リハビリテーション病院",
      position: "言語聴覚士",
      startDate: "2013-04",
      endDate: "2018-01",
      description: "回復期病棟での言語聴覚療法・摂食嚥下療法を担当。",
      achievements: [
        "精神医学誌に論文掲載",
        "リハビリテーション医学会にて研究発表",
      ],
      technologies: [],
    },
  ],
  skillCategories: [
    {
      category: "Frontend",
      skills: [
        {
          name: "TypeScript",
          level: "advanced",
          description: "型安全な設計でバグを未然に防ぎ、保守性の高いコードを実現",
        },
        {
          name: "React",
          level: "advanced",
          description: "Hooks・Suspenseを駆使したモダンな状態管理とUI設計",
        },
        {
          name: "Vite",
          level: "advanced",
          description: "高速なHMRとビルドで開発体験を大幅に向上",
        },
        {
          name: "styled-components",
          level: "advanced",
          description: "CSS-in-JSでコンポーネント単位のスタイル管理を実現",
        },
        {
          name: "React Hook Form",
          level: "advanced",
          description: "パフォーマンスに優れた宣言的なフォーム状態管理",
        },
        {
          name: "Zod",
          level: "advanced",
          description: "TypeScriptファーストなスキーマバリデーション",
        },
        {
          name: "Jotai",
          level: "intermediate",
          description: "アトミックな状態管理でシンプルかつ軽量な設計",
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "PHP",
          level: "advanced",
          description: "Laravel中心にAPIとバックエンド全般を担当",
        },
        {
          name: "Laravel",
          level: "advanced",
          description: "MVCアーキテクチャとEloquentで効率的なAPI開発",
        },
        {
          name: "C#",
          level: "beginner",
          description: "基本的な文法理解とアプリケーションの保守運用経験",
        },
      ],
    },
    {
      category: "Database",
      skills: [
        {
          name: "PostgreSQL",
          level: "intermediate",
          description: "複雑なクエリ設計とパフォーマンスチューニング",
        },
        {
          name: "MySQL",
          level: "intermediate",
          description: "5.7→8.0のメジャーバージョンアップを完遂",
        },
        {
          name: "Elasticsearch",
          level: "intermediate",
          description: "全文検索エンジンの設計と運用",
        },
      ],
    },
    {
      category: "Infrastructure",
      skills: [
        {
          name: "AWS",
          level: "intermediate",
          description: "EC2/RDS/S3/CloudFrontなど基本サービスの構築・運用",
        },
        {
          name: "Docker",
          level: "intermediate",
          description: "開発環境のコンテナ化と効率的な環境構築",
        },
        {
          name: "GitHub Actions",
          level: "advanced",
          description: "CI/CDパイプラインの設計・構築でデプロイを自動化",
        },
      ],
    },
    {
      category: "Testing & Quality",
      skills: [
        {
          name: "Vitest",
          level: "advanced",
          description: "Viteネイティブな高速テストでTDD/BDDを実践",
        },
        {
          name: "React Testing Library",
          level: "advanced",
          description: "ユーザー視点のテストで実際の動作を検証",
        },
        {
          name: "PHPUnit",
          level: "intermediate",
          description: "Laravelアプリケーションのユニットテスト",
        },
        {
          name: "ESLint",
          level: "advanced",
          description: "カスタムルールで一貫したコード品質を維持",
        },
      ],
    },
    {
      category: "AI & Tools",
      skills: [
        {
          name: "Claude Code",
          level: "advanced",
          description: "AIペアプログラミングで実装速度を大幅改善",
        },
        {
          name: "GitHub Copilot",
          level: "advanced",
          description: "コード補完と自動生成で開発効率を向上",
        },
        {
          name: "Figma",
          level: "intermediate",
          description: "デザイナーとの協業とデザインシステム構築",
        },
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      name: "デザインシステム構築",
      description:
        "デザイントークン、共通コンポーネント、インタラクションルールを3ヶ月で構築。Figmaと連携した効率的な開発フローを確立。",
      technologies: ["React", "TypeScript", "styled-components", "Figma"],
      links: {},
      featured: true,
    },
    {
      id: "proj-2",
      name: "AI駆動開発の推進",
      description:
        "Figma MCPとClaude Codeを連携し、設計情報からReactコンポーネントを自動生成。カスタムフックやインストラクションを整備し、チーム全体の生産性を向上。",
      technologies: ["Claude Code", "GitHub Copilot", "Figma MCP"],
      links: {},
      featured: true,
    },
    {
      id: "proj-3",
      name: "フロントエンド品質改善",
      description:
        "テスト自動化、静的解析の徹底、CRAからViteへの移行により開発体験と品質を大幅に向上。",
      technologies: ["Vitest", "ESLint", "Stylelint", "Vite"],
      links: {},
      featured: false,
    },
  ],
  publications: [
    {
      id: "pub-1",
      title: "Rey複雑図形模写課題における遂行機能障害の簡易評価尺度",
      venue: "精神医学 Vol.58 No.4",
      year: "2016",
      type: "paper",
    },
    {
      id: "pub-2",
      title: "ITB療法が摂食・嚥下障害に与える影響",
      venue: "第54回日本リハビリテーション医学会",
      year: "2017",
      type: "presentation",
    },
    {
      id: "pub-3",
      title: "重度失語症に対する発話分析〜音声の提示時間が復唱課題に与える影響",
      venue: "第42回日本高次脳機能障害学会",
      year: "2018",
      type: "presentation",
    },
    {
      id: "pub-4",
      title: "純粋失書例におけるタイピング障害の発現機序についての検討",
      venue: "第43回日本高次脳機能障害学会",
      year: "2019",
      type: "presentation",
    },
    {
      id: "pub-5",
      title: "視覚性呼称課題時の視線の動き：健常者",
      venue: "第45回日本高次脳機能障害学会",
      year: "2021",
      type: "presentation",
    },
    {
      id: "pub-6",
      title: "文理解課題における視線の動き：健常者",
      venue: "第45回日本高次脳機能障害学会",
      year: "2021",
      type: "presentation",
    },
  ],
};
