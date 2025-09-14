// Quiz Data for ICT Test Web Application
// JavaScript版 - 全970問の問題データ
// 元のC# QuizData.csから自動変換（2025-06-06T16:05:37.452Z）
// 追加問題：情報倫理・法律（20問）、プロジェクト管理・IT管理（20問）、ハードウェア・組み込み（20問）- 2025-06-07追加

// カテゴリ定義
const QuestionCategory = {
    ComputerBasics: 'ComputerBasics',           // コンピュータ基礎
    NumberSystems: 'NumberSystems',            // 数値システム（2進数・16進数）
    NetworkSecurity: 'NetworkSecurity',        // ネットワーク・セキュリティ
    WebDevelopment: 'WebDevelopment',         // Web開発・HTML
    Programming: 'Programming',               // プログラミング
    Database: 'Database',                    // データベース
    ArtificialIntelligence: 'ArtificialIntelligence', // AI・機械学習
    CloudComputing: 'CloudComputing',         // クラウド・IoT
    SoftwareEngineering: 'SoftwareEngineering', // ソフトウェア工学
    Multimedia: 'Multimedia',                // 画像・音声・マルチメディア
    BusinessApplications: 'BusinessApplications', // ビジネス・応用
    EmergingTechnologies: 'EmergingTechnologies', // 新技術・トレンド
    OperatingSystems: 'OperatingSystems',     // OS・システム管理
    DataStructuresAlgorithms: 'DataStructuresAlgorithms', // データ構造・アルゴリズム
    MobileAppDevelopment: 'MobileAppDevelopment', // モバイルアプリ開発
    GameDevelopment: 'GameDevelopment',       // ゲーム開発
    SystemDesign: 'SystemDesign',            // システム設計・アーキテクチャ
    Cybersecurity: 'Cybersecurity',          // サイバーセキュリティ
    DataScience: 'DataScience',              // データサイエンス・統計
    EthicsLegal: 'EthicsLegal',              // 情報倫理・法律
    ProjectManagement: 'ProjectManagement',   // プロジェクト管理・IT管理
    HardwareEngineering: 'HardwareEngineering', // ハードウェア・組み込み
    // 高校情報1の細分化カテゴリ
    DigitalInformationBasics: 'DigitalInformationBasics', // デジタル情報基礎
    AlgorithmProgrammingBasics: 'AlgorithmProgrammingBasics', // アルゴリズム・プログラミング基礎
    NetworkCommunicationBasics: 'NetworkCommunicationBasics', // 情報通信ネットワーク基礎
    InformationDesignBasics: 'InformationDesignBasics', // 情報デザイン基礎
    InformationSocietyEthics: 'InformationSocietyEthics', // 情報社会・倫理
    DataUtilizationBasics: 'DataUtilizationBasics', // データ活用基礎
    ProblemSolvingInformationLiteracy: 'ProblemSolvingInformationLiteracy', // 問題解決・情報活用
    All: 'All'                               // すべて
};

// カテゴリ表示名マッピング
const CategoryDisplayNames = {
    ComputerBasics: 'コンピュータ基礎',
    NumberSystems: '数値システム（2進数・16進数）',
    NetworkSecurity: 'ネットワーク・セキュリティ',
    WebDevelopment: 'Web開発・HTML',
    Programming: 'プログラミング',
    Database: 'データベース',
    ArtificialIntelligence: 'AI・機械学習',
    CloudComputing: 'クラウド・IoT',
    SoftwareEngineering: 'ソフトウェア工学',
    Multimedia: '画像・音声・マルチメディア',
    BusinessApplications: 'ビジネス・応用',
    EmergingTechnologies: '新技術・トレンド',
    OperatingSystems: 'OS・システム管理',
    DataStructuresAlgorithms: 'データ構造・アルゴリズム',
    MobileAppDevelopment: 'モバイルアプリ開発',
    GameDevelopment: 'ゲーム開発',
    SystemDesign: 'システム設計・アーキテクチャ',
    Cybersecurity: 'サイバーセキュリティ',
    DataScience: 'データサイエンス・統計',
    EthicsLegal: '情報倫理・法律',
    ProjectManagement: 'プロジェクト管理・IT管理',
    HardwareEngineering: 'ハードウェア・組み込み',
    // 高校情報1の細分化カテゴリ表示名
    DigitalInformationBasics: 'デジタル情報基礎',
    AlgorithmProgrammingBasics: 'アルゴリズム・プログラミング基礎',
    NetworkCommunicationBasics: '情報通信ネットワーク基礎',
    InformationDesignBasics: '情報デザイン基礎',
    InformationSocietyEthics: '情報社会・倫理',
    DataUtilizationBasics: 'データ活用基礎',
    ProblemSolvingInformationLiteracy: '問題解決・情報活用',
    All: 'すべてのカテゴリ'
};

// 難易度定義
const DifficultyLevel = {
    Basic: 'Basic',           // 基礎レベル（中学生程度）
    Intermediate: 'Intermediate', // 中級レベル（高校生程度）
    Advanced: 'Advanced',     // 上級レベル（大学・専門学校程度）
    All: 'All'               // すべてのレベル
};

// 難易度表示名マッピング
const DifficultyDisplayNames = {
    Basic: '基礎（中学生レベル）',
    Intermediate: '中級（高校生レベル）',
    Advanced: '上級（大学・専門学校レベル）',
    All: 'すべてのレベル'
};

// 問題クラス
class Question {
    constructor(text, options, correctAnswer, explanation = "", category = QuestionCategory.ComputerBasics, difficulty = DifficultyLevel.Basic) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.explanation = explanation;
        this.category = category;
        this.difficulty = difficulty;
    }
}

// 全ての問題データ
const allQuestions = [
    // 情報デザイン基礎 追加問題（50問）
    new Question(
        "情報デザインにおける「可読性」とは何ですか？",
        ["文字の美しさ", "文字の読みやすさ", "文字の大きさ", "文字の色"],
        1,
        "可読性とは、文字や文章がどの程度読みやすいかを示す指標です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webサイトのユーザビリティを向上させる要素として適切でないものはどれですか？",
        ["直感的なナビゲーション", "速い読み込み時間", "複雑なアニメーション", "明確な情報構造"],
        2,
        "複雑なアニメーションはユーザーの注意を散漫にし、ユーザビリティを低下させる可能性があります。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報アーキテクチャにおける「ラベリング」の目的は何ですか？",
        ["見た目を美しくする", "情報を分類・整理する", "ページ数を増やす", "アクセス数を増やす"],
        1,
        "ラベリングは情報を適切に分類・整理し、ユーザーが求める情報を見つけやすくする目的があります。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "インフォグラフィックのデザインで最も重要なことは何ですか？",
        ["派手な色使い", "情報の正確性と理解しやすさ", "文字量の多さ", "画像の華やかさ"],
        1,
        "インフォグラフィックでは、情報を正確に、かつ視覚的に理解しやすく伝えることが最も重要です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページの「視線の流れ」を考慮したレイアウトとして代表的なものは？",
        ["円形レイアウト", "Z型レイアウト", "星型レイアウト", "波型レイアウト"],
        1,
        "Z型レイアウトは、人の自然な視線の流れ（左上→右上→左下→右下）を考慮した代表的なレイアウトです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ユニバーサルデザインの7原則に含まれないものはどれですか？",
        ["公平な利用", "使用における柔軟性", "単純で直感的な利用", "高価な材料の使用"],
        3,
        "ユニバーサルデザインの7原則には、公平性、柔軟性、単純性などが含まれますが、高価な材料の使用は含まれません。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報デザインにおける「グリッドシステム」の利点は何ですか？",
        ["自由度の向上", "統一感のあるレイアウト", "製作時間の短縮", "ファイルサイズの削減"],
        1,
        "グリッドシステムは、要素を規則的に配置することで統一感のあるレイアウトを作成できます。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "カラーパレットを選択する際に考慮すべき要素として適切でないものは？",
        ["ブランドイメージ", "ターゲット層", "個人の好み", "アクセシビリティ"],
        2,
        "カラーパレットの選択では、ブランドイメージ、ターゲット層、アクセシビリティを考慮し、個人の好みに偏らないことが重要です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "「階層構造」を視覚的に表現する手法として適切でないものは？",
        ["インデント", "フォントサイズの変化", "色の統一", "スペースの活用"],
        2,
        "階層構造を表現するには、インデント、フォントサイズの変化、スペースの活用が有効ですが、色の統一は階層を区別しにくくします。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "レスポンシブデザインの基本概念は何ですか？",
        ["画面サイズに応じた表示の最適化", "高速な読み込み", "多言語対応", "SEO対策"],
        0,
        "レスポンシブデザインは、デバイスの画面サイズに応じて表示を最適化する設計手法です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "タイポグラフィにおける「カーニング」とは何ですか？",
        ["文字の大きさ", "文字間のスペース調整", "行間の調整", "文字の色"],
        1,
        "カーニングは、特定の文字の組み合わせにおいて文字間のスペースを調整することです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報設計における「ペルソナ」の役割は何ですか？",
        ["デザインの装飾", "ターゲットユーザーの具体化", "プログラムの最適化", "予算の計算"],
        1,
        "ペルソナは、ターゲットユーザーを具体的な人物像として設定し、ユーザー中心の設計を行うためのツールです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webサイトの「導線設計」で重要なことは何ですか？",
        ["美しいデザイン", "ユーザーの目的達成への誘導", "多くのページ数", "複雑な構造"],
        1,
        "導線設計では、ユーザーが迷わずに目的を達成できるよう、適切な流れを設計することが重要です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の「優先順位付け」を視覚的に表現する手法として適切でないものは？",
        ["サイズの違い", "コントラストの活用", "位置の配置", "全て同じスタイル"],
        3,
        "優先順位付けには、サイズ、コントラスト、位置などの違いを活用し、全て同じスタイルでは優先順位が伝わりません。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "「余白（ホワイトスペース）」の効果として適切でないものは？",
        ["視認性の向上", "情報の整理", "容量の節約", "読みやすさの向上"],
        2,
        "余白は視認性、情報整理、読みやすさを向上させますが、容量節約とは関係ありません。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アイコンデザインの原則として重要でないものはどれですか？",
        ["認識しやすさ", "統一性", "複雑さ", "文脈との適合性"],
        2,
        "アイコンデザインでは、認識しやすさ、統一性、文脈との適合性が重要で、複雑さは避けるべきです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ユーザーインターフェース（UI）デザインにおける「一貫性」の重要性は何ですか？",
        ["見た目の美しさ", "学習コストの軽減", "開発コストの削減", "流行への対応"],
        1,
        "一貫性のあるUIデザインは、ユーザーの学習コストを軽減し、直感的な操作を可能にします。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報デザインにおける「認知負荷」を軽減する方法として適切でないものは？",
        ["情報の分割", "視覚的階層の明確化", "情報量の増加", "直感的な配置"],
        2,
        "認知負荷の軽減には、情報の分割、階層化、直感的配置が有効ですが、情報量の増加は逆効果です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webフォントを選択する際の考慮事項として適切でないものは？",
        ["読みやすさ", "読み込み速度", "流行のトレンド", "デバイス対応"],
        2,
        "Webフォント選択では、読みやすさ、読み込み速度、デバイス対応を重視し、単なる流行に左右されるべきではありません。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートフォン向けUIデザインで重要な「タッチターゲット」のサイズは？",
        ["24px以上", "44px以上", "64px以上", "100px以上"],
        1,
        "スマートフォンのタッチターゲットは、指での操作を考慮して44px以上が推奨されています。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データ可視化において「チャートジャンク」とは何ですか？",
        ["必要なデータ", "不要な装飾要素", "重要な情報", "データの要約"],
        1,
        "チャートジャンクは、データの理解を妨げる不要な装飾要素や視覚的ノイズのことです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報アーキテクチャの「カードソーティング」手法の目的は何ですか？",
        ["デザインの評価", "情報の分類構造の発見", "プログラムのテスト", "費用の計算"],
        1,
        "カードソーティングは、ユーザーの思考モデルに基づいた情報の分類構造を発見するための手法です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "「プロトタイピング」の主な目的は何ですか？",
        ["最終製品の作成", "アイデアの検証と改善", "予算の削減", "開発時間の短縮"],
        1,
        "プロトタイピングは、アイデアや設計を早期に検証し、問題点を発見・改善するために行います。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ユーザビリティテストで観察すべき指標として適切でないものは？",
        ["タスク完了率", "エラー率", "ユーザー満足度", "開発者の主観"],
        3,
        "ユーザビリティテストでは、タスク完了率、エラー率、ユーザー満足度などの客観的指標を観察し、開発者の主観は排除します。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "「ユーザーエクスペリエンス（UX）」と「ユーザーインターフェース（UI）」の関係は？",
        ["同じ意味", "UIがUXの一部", "UXがUIの一部", "全く関係ない"],
        1,
        "UIはUXの一部です。UIは見た目や操作性、UXはユーザーの全体的な体験を指します。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "「A/Bテスト」の目的は何ですか？",
        ["バグの発見", "デザインバリエーションの比較検証", "セキュリティの確認", "性能の測定"],
        1,
        "A/Bテストは、異なるデザインバリエーションを比較して、どちらがより効果的かを検証する手法です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報デザインにおける「ゲシュタルト原理」に含まれないものは？",
        ["近接性", "類似性", "連続性", "複雑性"],
        3,
        "ゲシュタルト原理には近接性、類似性、連続性などが含まれますが、複雑性は含まれません。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "Webサイトの「情報スクラム」における重要な要素は何ですか？",
        ["美しいデザイン", "ユーザーのメンタルモデル", "最新技術の活用", "豊富なコンテンツ"],
        1,
        "情報設計では、ユーザーのメンタルモデル（思考パターン）を理解し、それに合わせた構造設計が重要です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "モバイルファーストデザインの考え方は何ですか？",
        ["デスクトップを先に設計", "モバイル画面から設計開始", "タブレットを重視", "全デバイス同時設計"],
        1,
        "モバイルファーストは、最も制約の多いモバイル画面から設計を開始し、段階的に大画面に展開する手法です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "「インタラクションデザイン」で重要な「フィードバック」の役割は？",
        ["装飾効果", "ユーザーへの応答", "ページの装飾", "広告効果"],
        1,
        "フィードバックは、ユーザーの操作に対してシステムが応答することで、操作の結果を明確に伝える役割があります。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webアクセシビリティガイドライン（WCAG）の基本原則に含まれないものは？",
        ["知覚可能", "操作可能", "理解可能", "魅力的"],
        3,
        "WCAGの基本原則は「知覚可能」「操作可能」「理解可能」「堅牢」の4つで、「魅力的」は含まれません。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デザインシステムの利点として適切でないものは？",
        ["一貫性の確保", "開発効率の向上", "創造性の完全な自由", "品質の標準化"],
        2,
        "デザインシステムは一貫性、効率性、品質標準化に寄与しますが、完全な創造性の自由は制限される場合があります。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ユーザージャーニーマップの作成目的は何ですか？",
        ["デザインの装飾", "ユーザー体験の可視化", "プログラムのテスト", "コスト計算"],
        1,
        "ユーザージャーニーマップは、ユーザーがサービスを利用する過程での体験を時系列で可視化するツールです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "「マイクロインタラクション」の効果として適切でないものは？",
        ["ユーザーエンゲージメント向上", "フィードバックの提供", "ページ容量の大幅削減", "使いやすさの向上"],
        2,
        "マイクロインタラクションはエンゲージメント、フィードバック、使いやすさを向上させますが、ページ容量削減が主目的ではありません。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報デザインにおける「スキャナビリティ」を向上させる手法として適切でないものは？",
        ["見出しの活用", "箇条書きの使用", "長い文章の連続", "視覚的な区切り"],
        2,
        "スキャナビリティ向上には、見出し、箇条書き、視覚的区切りが有効ですが、長い文章の連続は読み飛ばしを困難にします。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
        ),
    new Question(
        "デジタル情報の基本単位は何ですか？",
        ["バイト", "ビット", "キロバイト", "メガバイト"],
        1,
        "ビット（bit）は0または1の値を持つデジタル情報の最小単位です。",
        QuestionCategory.DigitalInformationBasics,
    ),
    new Question(
        "16進数のAは10進数でいくつですか？",
        ["9", "10", "11", "12"],
        1,
        "16進数のAは10進数の10を表します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "音の波形をデジタル化する際に重要な要素はどれですか？",
        ["音量", "サンプリング周波数", "音色", "楽器の種類"],
        1,
        "音のデジタル化では、1秒間に何回音を測定するかのサンプリング周波数が重要です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "画像の解像度を表す単位はどれですか？",
        ["Hz", "dpi", "MB", "KB"],
        1,
        "画像の解像度はdpi（dots per inch）やppi（pixels per inch）で表現されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の25を2進数に変換すると？",
        ["11001", "10101", "11010", "10011"],
        0,
        "25 = 16+8+1 = 2⁴+2³+2⁰ = 11001です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "文字コードUTF-8の特徴として正しいものはどれですか？",
        ["1バイト固定", "可変長エンコーディング", "日本語未対応", "2バイト固定"],
        1,
        "UTF-8は1〜4バイトの可変長エンコーディングで、世界中の文字を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル画像の色を表現する際、RGBの各色は通常何ビットで表現されますか？",
        ["4ビット", "8ビット", "16ビット", "32ビット"],
        1,
        "RGBの各色は通常8ビット（0〜255）で表現され、合計24ビットでフルカラーを表現します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "2の補数表現で-1を4ビットで表すと？",
        ["1000", "1001", "1110", "1111"],
        3,
        "2の補数表現では、1の補数（0000）に1を加えて1111が-1になります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "音楽CDのサンプリング周波数は通常何Hzですか？",
        ["22050Hz", "44100Hz", "48000Hz", "96000Hz"],
        1,
        "音楽CDのサンプリング周波数は44.1kHz（44100Hz）です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハフマン符号化の目的は何ですか？",
        ["セキュリティ向上", "データ圧縮", "エラー検出", "暗号化"],
        1,
        "ハフマン符号化は、出現頻度の高い文字に短い符号を割り当ててデータを圧縮する手法です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "8ビットで表現できる数値の範囲（符号なし）は？",
        ["0〜127", "0〜255", "0〜511", "0〜1023"],
        1,
        "8ビットの符号なし整数は0〜255（2⁸-1）の範囲を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フォントのアンチエイリアシングの目的は？",
        ["色の調整", "サイズの調整", "滑らかな表示", "速度の向上"],
        2,
        "アンチエイリアシングは文字の輪郭を滑らかに表示するための技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "16進数FF は10進数でいくつですか？",
        ["254", "255", "256", "257"],
        1,
        "16進数のFFは15×16¹+15×16⁰=240+15=255です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像の色深度24ビットで表現できる色数は？",
        ["約1,600万色", "約3,200万色", "約6,400万色", "約1億2,800万色"],
        0,
        "24ビット（RGB各8ビット）では2²⁴=約1,677万色を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "BCD（Binary Coded Decimal）で10進数の9を表すと？",
        ["1001", "1010", "1011", "1100"],
        0,
        "BCDでは10進数の各桁を4ビットの2進数で表現し、9は1001です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル信号の利点として正しくないものはどれですか？",
        ["ノイズに強い", "劣化しにくい", "アナログより高速", "複製が容易"],
        2,
        "デジタル信号は必ずしもアナログより高速ではありません。利点はノイズ耐性、劣化防止、複製の容易さです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "パリティビットの目的は何ですか？",
        ["データ圧縮", "エラー検出", "暗号化", "高速化"],
        1,
        "パリティビットはデータ伝送時のエラーを検出するために使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "8進数77を10進数に変換すると？",
        ["61", "62", "63", "64"],
        2,
        "8進数77は7×8¹+7×8⁰=56+7=63です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "IEEE754単精度浮動小数点数の仮数部は何ビットですか？",
        ["23ビット", "24ビット", "31ビット", "32ビット"],
        0,
        "IEEE754単精度では、符号1ビット、指数8ビット、仮数23ビットです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "グレースケール画像で1ピクセルを8ビットで表現する場合、表現できる階調数は？",
        ["128段階", "256段階", "512段階", "1024段階"],
        1,
        "8ビットでは2⁸=256段階のグレースケールを表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル音声で量子化ビット数を増やすとどうなりますか？",
        ["音質が向上する", "ファイルサイズが小さくなる", "再生速度が上がる", "音程が高くなる"],
        0,
        "量子化ビット数を増やすと音の細かな変化を正確に記録でき、音質が向上します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "10進数100を2進数に変換すると？",
        ["1100100", "1010100", "1110100", "1001100"],
        0,
        "100=64+32+4=2⁶+2⁵+2²=1100100です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "文字コードASCIIで表現できる文字数は？",
        ["64文字", "128文字", "256文字", "512文字"],
        1,
        "ASCII（7ビット）では2⁷=128文字を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ランレングス圧縮が最も効果的なデータは？",
        ["音楽ファイル", "同じ値が連続するデータ", "ランダムなデータ", "テキストファイル"],
        1,
        "ランレングス圧縮は同じ値が連続するデータに対して最も効果的です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "16進数1Aを10進数に変換すると？",
        ["24", "25", "26", "27"],
        2,
        "16進数1Aは1×16¹+10×16⁰=16+10=26です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル画像のディザリングの目的は？",
        ["圧縮", "色数削減時の品質向上", "高速表示", "セキュリティ"],
        1,
        "ディザリングは限られた色数で疑似的に中間色を表現し、画質を向上させる技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "2進数の論理演算XORの特徴は？",
        ["同じ値で1になる", "異なる値で1になる", "常に0になる", "常に1になる"],
        1,
        "XOR（排他的論理和）は入力が異なる場合に1、同じ場合に0になります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "10進数の-5を8ビットの2の補数で表すと？",
        ["11111011", "10000101", "01111011", "11110101"],
        0,
        "-5の2の補数表現は、5（00000101）の1の補数（11111010）に1を加えて11111011です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "チェックサムの主な用途は？",
        ["データ圧縮", "データ完全性確認", "データ暗号化", "データ高速化"],
        1,
        "チェックサムはデータの完全性を確認し、伝送エラーを検出するために使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "8進数で表現される3桁の最大値を10進数で表すと？",
        ["511", "512", "513", "514"],
        0,
        "8進数3桁の最大値777は7×8²+7×8¹+7×8⁰=448+56+7=511です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル画像のビット深度が大きいほど何が増える？",
        ["画像サイズ", "表現可能な色数", "処理速度", "圧縮率"],
        1,
        "ビット深度が大きいほど、1ピクセルあたりより多くの色を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "エラー訂正符号の利点は？",
        ["データ圧縮", "エラー検出・訂正", "高速化", "暗号化"],
        1,
        "エラー訂正符号はデータエラーを検出し、さらに一部のエラーを自動的に訂正できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "16進数と2進数の関係で正しいものは？",
        ["16進数1桁=2進数2桁", "16進数1桁=2進数4桁", "16進数1桁=2進数8桁", "関係ない"],
        1,
        "16進数1桁は2進数4桁に対応します（16=2⁴）。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "符号付き8ビット整数で表現できる最小値は？",
        ["-127", "-128", "-129", "-255"],
        1,
        "8ビット2の補数表現では-128〜127の範囲を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル信号処理でのエイリアシングを防ぐには？",
        ["高周波数でサンプリング", "低周波数でサンプリング", "アンチエイリアシングフィルタ", "量子化ビット数増加"],
        2,
        "エイリアシングを防ぐには、サンプリング前にアンチエイリアシングフィルタで高周波成分を除去します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "可逆圧縮と非可逆圧縮の違いは？",
        ["速度の違い", "元データの復元可能性", "圧縮率の違い", "使用メモリの違い"],
        1,
        "可逆圧縮は元データを完全に復元できますが、非可逆圧縮は一部の情報が失われます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数255を16進数に変換すると？",
        ["FE", "FF", "100", "101"],
        1,
        "255÷16=15余り15なので、16進数ではFF（F=15）です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ナイキスト定理によると、信号を正確にサンプリングするには最低何倍の周波数が必要ですか？",
        ["1倍", "2倍", "4倍", "8倍"],
        1,
        "ナイキスト定理により、信号の最高周波数の2倍以上でサンプリングする必要があります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル画像のアルファチャンネルの用途は？",
        ["色の調整", "透明度の制御", "画質の向上", "圧縮率の向上"],
        1,
        "アルファチャンネルは画像の透明度を制御するために使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "2進数1010と1100のAND演算の結果は？",
        ["1000", "1110", "1010", "1100"],
        0,
        "AND演算は各ビットで1010 AND 1100 = 1000となります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "固定小数点数と浮動小数点数の主な違いは？",
        ["精度", "表現範囲", "計算速度", "メモリ使用量"],
        1,
        "浮動小数点数は固定小数点数より広い範囲の数値を表現できますが、精度の問題があります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データの符号化で冗長性を減らすことを何と言いますか？",
        ["暗号化", "圧縮", "復号化", "エンコード"],
        1,
        "データの冗長性を減らしてサイズを小さくすることを圧縮と言います。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    // 高校必修レベル追加問題（200問）
    // デジタル情報基礎 追加問題（30問）
    new Question(
        "1バイトは何ビットですか？",
        ["4ビット", "8ビット", "16ビット", "32ビット"],
        1,
        "1バイト = 8ビットです。これはコンピュータの基本的な単位です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "8進数で「17」を10進数に変換すると？",
        ["15", "17", "19", "23"],
        0,
        "8進数17 = 1×8¹ + 7×8⁰ = 8 + 7 = 15です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ASCII文字コードで「A」は何番ですか？",
        ["64", "65", "66", "97"],
        1,
        "ASCII文字コードで大文字の「A」は65番です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "RGB各色8ビットの場合、赤色の最大値を16進数で表すと？",
        ["FF0000", "00FF00", "0000FF", "FFFFFF"],
        0,
        "赤色最大値はRed=255(FF), Green=0(00), Blue=0(00)なので、FF0000です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル音声のサンプリング周波数44.1kHzの意味は？",
        ["44100回/秒", "44100Hz/秒", "44.1回/秒", "44.1kHz/分"],
        0,
        "44.1kHz = 44100Hzは、1秒間に44100回音声をサンプリングすることを表します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "JPEGは何の圧縮方式ですか？",
        ["可逆圧縮", "非可逆圧縮", "無圧縮", "暗号化"],
        1,
        "JPEGは非可逆圧縮方式で、画像品質を犠牲にしてファイルサイズを小さくします。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "PNGファイル形式の特徴は？",
        ["非可逆圧縮", "透明度非対応", "可逆圧縮", "音声専用"],
        2,
        "PNGは可逆圧縮方式で、透明度もサポートする画像形式です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "1TB（テラバイト）は約何GB（ギガバイト）ですか？",
        ["100GB", "500GB", "1000GB", "1024GB"],
        3,
        "1TB = 1024GB（厳密には2¹⁰ = 1024）です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "QRコードの「QR」は何の略ですか？",
        ["Quick Response", "Quality Read", "Quantum Register", "Query Result"],
        0,
        "QRは「Quick Response（素早い応答）」の略で、高速読み取りが可能なコードです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハードディスクの容量を表す際、1KB＝何バイトとして計算されることが多いですか？",
        ["1000バイト", "1024バイト", "1012バイト", "1048バイト"],
        0,
        "ハードディスクメーカーは通常、1KB=1000バイト（10進）で計算します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "16進数で「A」は10進数でいくつですか？",
        ["9", "10", "11", "12"],
        1,
        "16進数のAは10進数の10に相当します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "UTF-16とUTF-8の違いは？",
        ["文字の種類", "エンコード方式", "言語の違い", "用途の違い"],
        1,
        "UTF-16とUTF-8は、Unicode文字を表現する異なるエンコード方式です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "カラー画像の1ピクセルが24ビットの場合、何色表現できますか？",
        ["256色", "65536色", "約1677万色", "約43億色"],
        2,
        "24ビット = 2²⁴ = 約1677万色を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ビット深度8ビットの音声データで表現できる音の強さのレベル数は？",
        ["128レベル", "256レベル", "512レベル", "1024レベル"],
        1,
        "8ビット = 2⁸ = 256レベルの音の強さを表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "BMPファイル形式の特徴は？",
        ["高圧縮率", "無圧縮", "音声対応", "動画対応"],
        1,
        "BMPは基本的に無圧縮の画像形式で、ファイルサイズが大きくなります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数「255」を16進数で表すと？",
        ["FE", "FF", "100", "256"],
        1,
        "255 = 15×16 + 15 = FF（16進数）です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル画像の解像度300dpiの意味は？",
        ["300ドット/インチ", "300ピクセル/cm", "300色/インチ", "300MB/インチ"],
        0,
        "300dpi = 1インチあたり300ドット（点）の密度を表します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ステレオ音声とモノラル音声の違いは？",
        ["音質の違い", "チャンネル数の違い", "周波数の違い", "ビット数の違い"],
        1,
        "ステレオは2チャンネル、モノラルは1チャンネルの音声です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "バーコードとQRコードの主な違いは？",
        ["読み取り方向", "データ容量", "印刷方法", "用途"],
        1,
        "QRコードはバーコードより多くの情報を格納でき、2次元読み取りが可能です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータの記憶装置の階層で最も高速なものは？",
        ["ハードディスク", "SSD", "メモリ", "レジスタ"],
        3,
        "レジスタはCPU内部にあり、最も高速にアクセスできる記憶装置です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "2進数「1111」を10進数に変換すると？",
        ["15", "16", "31", "32"],
        0,
        "1×8 + 1×4 + 1×2 + 1×1 = 15です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "MP3ファイルの圧縮方式は？",
        ["可逆圧縮", "非可逆圧縮", "無圧縮", "暗号化"],
        1,
        "MP3は非可逆圧縮方式で、人間が聞き取りにくい音域を削除してファイルサイズを小さくします。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フルHD解像度は何×何ピクセルですか？",
        ["1280×720", "1920×1080", "2560×1440", "3840×2160"],
        1,
        "フルHD（1080p）は1920×1080ピクセルの解像度です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイルの拡張子「.wav」は何のファイルですか？",
        ["画像", "音声", "動画", "文書"],
        1,
        ".wavは音声ファイルの拡張子で、無圧縮音声データを格納します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "8ビットで表現できる数値の範囲は？",
        ["0-127", "0-255", "0-511", "0-1023"],
        1,
        "8ビット = 2⁸ = 256通りなので、0から255までの数値を表現できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ICカードに使われる技術は？",
        ["磁気記録", "光学記録", "半導体メモリ", "機械的記録"],
        2,
        "ICカードは半導体メモリ（集積回路）を使ってデータを記録します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画の「フレームレート」とは？",
        ["画面サイズ", "色数", "1秒間の画像数", "圧縮率"],
        2,
        "フレームレートは1秒間に表示される画像（フレーム）の数です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CDの音質は何ビット、何kHzですか？",
        ["16ビット、44.1kHz", "24ビット、48kHz", "8ビット、22kHz", "32ビット、96kHz"],
        0,
        "CD音質は16ビット、44.1kHzサンプリングが標準です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル署名の主な目的は？",
        ["暗号化", "データ圧縮", "本人確認", "高速化"],
        2,
        "デジタル署名は、データの送信者が本人であることを証明する技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "4K解像度は約何万ピクセルですか？",
        ["200万", "800万", "1600万", "3200万"],
        1,
        "4K解像度（3840×2160）は約830万ピクセルです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンピュータの基本的な構成要素として正しくないものはどれですか？",
        ["CPU", "メモリ", "ハードディスク", "スピーカー"],
        3,
        "スピーカーは出力装置であり、コンピュータの基本構成要素ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "1バイトは何ビットですか？",
        ["4ビット", "6ビット", "8ビット", "16ビット"],
        2,
        "1バイト = 8ビットです。これはコンピュータの基本的な単位です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CPUの主な機能は何ですか？",
        ["データの保存", "命令の実行", "画面表示", "音声出力"],
        1,
        "CPUは中央処理装置で、プログラムの命令を実行する役割を持ちます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "メモリの種類でないものはどれですか？",
        ["RAM", "ROM", "CPU", "キャッシュメモリ"],
        2,
        "CPUは処理装置であり、メモリの種類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハードディスクドライブ（HDD）の特徴として正しいものはどれですか？",
        ["電源を切ると内容が消える", "回転する円盤を使用", "CPUの一部", "入力装置"],
        1,
        "HDDは磁気ディスクが回転してデータを読み書きする記憶装置です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数の「1011」を10進数に変換すると？",
        ["9", "10", "11", "12"],
        2,
        "1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = 11",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "10進数の「15」を2進数に変換すると？",
        ["1110", "1111", "1011", "1001"],
        1,
        "15 = 8 + 4 + 2 + 1 = 1111₂",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "16進数の「FF」を10進数に変換すると？",
        ["255", "256", "240", "225"],
        0,
        "F = 15なので、15×16 + 15 = 240 + 15 = 255",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "2進数「1010」に2進数「0011」を加算すると？",
        ["1101", "1011", "1100", "1111"],
        0,
        "1010 + 0011 = 1101（10 + 3 = 13）",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "2進数で表現できる最小の負の数を表す方法は？",
        ["補数表現", "絶対値表現", "符号ビット", "すべて正しい"],
        0,
        "2の補数表現が最も一般的な負の数の表現方法です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "インターネットで使用される通信プロトコルはどれですか？",
        ["HTTP", "FTP", "SMTP", "すべて"],
        3,
        "HTTP（ウェブ）、FTP（ファイル転送）、SMTP（メール送信）はすべてインターネットで使用されるプロトコルです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IPアドレスの形式として正しいものはどれですか？",
        ["192.168.1.1", "www.example.com", "http://example.com", "192.168.1.256"],
        0,
        "IPアドレスは0-255の数字4つをドットで区切った形式です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTTPSのSは何を意味しますか？",
        ["Speed", "Secure", "Simple", "Standard"],
        1,
        "HTTPSのSはSecure（安全）を意味し、SSL/TLSで暗号化された通信を行います。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "DNSの主な機能は何ですか？",
        ["ウイルス検出", "ドメイン名からIPアドレスへの変換", "データ圧縮", "暗号化"],
        1,
        "DNS（Domain Name System）はドメイン名をIPアドレスに変換するシステムです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "LANの略語として正しいものはどれですか？",
        ["Large Area Network", "Local Area Network", "Long Access Network", "Low Area Network"],
        1,
        "LANはLocal Area Networkの略で、限られた範囲内のネットワークです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLは何の略ですか？",
        ["High Tech Markup Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
        1,
        "HTMLはHyperText Markup Languageの略で、ウェブページを作成するためのマークアップ言語です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLでリンクを作成するタグはどれですか？",
        ["<link>", "<a>", "<href>", "<url>"],
        1,
        "<a>タグを使用してリンクを作成します。href属性でリンク先を指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSは何の略ですか？",
        ["Computer Style Sheet", "Cascading Style Sheets", "Creative Style System", "Code Style Standard"],
        1,
        "CSSはCascading Style Sheetsの略で、ウェブページのスタイルを指定する言語です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで表を作成するタグはどれですか？",
        ["<table>", "<tab>", "<grid>", "<list>"],
        0,
        "<table>タグを使用して表を作成します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで画像を表示するタグはどれですか？",
        ["<image>", "<picture>", "<img>", "<photo>"],
        2,
        "<img>タグを使用して画像を表示します。src属性で画像のパスを指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミング言語でないものはどれですか？",
        ["Java", "Python", "HTML", "C++"],
        2,
        "HTMLはマークアップ言語であり、プログラミング言語ではありません。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "変数とは何ですか？",
        ["固定された値", "データを格納する領域", "プログラムの実行順序", "エラーメッセージ"],
        1,
        "変数はデータを一時的に格納するためのメモリ領域です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "ループ処理の目的は何ですか？",
        ["エラーを修正する", "同じ処理を繰り返す", "プログラムを終了する", "変数を削除する"],
        1,
        "ループ処理は同じ処理を条件に応じて繰り返し実行するための制御構造です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "条件分岐で使用される文はどれですか？",
        ["for文", "while文", "if文", "return文"],
        2,
        "if文は条件に応じて処理を分岐させるための制御文です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "アルゴリズムとは何ですか？",
        ["プログラミング言語", "問題解決の手順", "コンピュータの部品", "ソフトウェアの名前"],
        1,
        "アルゴリズムは問題を解決するための明確な手順や方法です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースでデータを検索するために使用される言語はどれですか？",
        ["HTML", "CSS", "SQL", "XML"],
        2,
        "SQL（Structured Query Language）はデータベースを操作するための言語です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "リレーショナルデータベースの基本単位は何ですか？",
        ["ファイル", "テーブル", "フォルダ", "ディレクトリ"],
        1,
        "リレーショナルデータベースでは、データはテーブル形式で管理されます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "主キー（Primary Key）の役割は何ですか？",
        ["データの暗号化", "レコードの一意識別", "データの圧縮", "バックアップ作成"],
        1,
        "主キーは各レコードを一意に識別するためのフィールドです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SQLでデータを挿入するコマンドはどれですか？",
        ["SELECT", "INSERT", "UPDATE", "DELETE"],
        1,
        "INSERTコマンドを使用してテーブルに新しいデータを挿入します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "正規化の目的は何ですか？",
        ["データの重複を排除", "処理速度の向上", "容量の削減", "すべて正しい"],
        3,
        "正規化はデータの重複排除、整合性の確保、効率性の向上を目的とします。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータウイルスの感染経路でないものはどれですか？",
        ["メール添付ファイル", "USBメモリ", "ウェブサイト", "電源コード"],
        3,
        "電源コードは物理的な接続であり、ウイルス感染の経路ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "強いパスワードの条件として適切でないものはどれですか？",
        ["英数字を混在させる", "8文字以上にする", "個人情報を含める", "記号を含める"],
        2,
        "個人情報を含むパスワードは推測されやすく、セキュリティ上危険です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイアウォールの主な機能は何ですか？",
        ["データの圧縮", "不正アクセスの防止", "処理速度の向上", "データのバックアップ"],
        1,
        "ファイアウォールは不正なネットワークアクセスを検出・遮断するシステムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フィッシング詐欺とは何ですか？",
        ["魚を釣る趣味", "偽サイトで個人情報を盗む詐欺", "コンピュータの修理", "ソフトウェアの販売"],
        1,
        "フィッシング詐欺は偽のウェブサイトに誘導して個人情報を不正取得する詐欺です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "暗号化の目的は何ですか？",
        ["データの圧縮", "データの保護", "処理速度の向上", "メモリの節約"],
        1,
        "暗号化はデータを第三者に読み取られないように保護する技術です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "オペレーティングシステムの役割として正しくないものはどれですか？",
        ["ハードウェアの管理", "アプリケーションの実行環境提供", "ウイルス感染", "ファイル管理"],
        2,
        "ウイルス感染はOSの役割ではなく、避けるべき問題です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "オープンソースソフトウェアの特徴は何ですか？",
        ["ソースコードが公開されている", "必ず有料である", "Windowsでしか動作しない", "インターネットが不要"],
        0,
        "オープンソースソフトウェアはソースコードが一般に公開されているソフトウェアです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デバイスドライバの役割は何ですか？",
        ["ウイルス検出", "ハードウェアとOSの仲介", "データの暗号化", "メモリの管理"],
        1,
        "デバイスドライバはハードウェアとオペレーティングシステムの間の通信を仲介します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アップデートの主な目的は何ですか？",
        ["容量を増やす", "セキュリティ強化と機能改善", "価格を下げる", "デザインを変更する"],
        1,
        "ソフトウェアアップデートは主にセキュリティ強化、バグ修正、機能改善を目的とします。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドコンピューティングの利点として正しくないものはどれですか？",
        ["どこからでもアクセス可能", "自動バックアップ", "インターネット不要", "コスト削減"],
        2,
        "クラウドコンピューティングはインターネット接続が必要なサービスです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像ファイル形式でないものはどれですか？",
        ["JPEG", "PNG", "GIF", "MP3"],
        3,
        "MP3は音声ファイル形式であり、画像形式ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "テキストファイルの拡張子として正しいものはどれですか？",
        [".txt", ".jpg", ".mp3", ".exe"],
        0,
        ".txtはテキストファイルの一般的な拡張子です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "圧縮ファイル形式でないものはどれですか？",
        ["ZIP", "RAR", "7z", "BMP"],
        3,
        "BMPは画像ファイル形式であり、圧縮ファイル形式ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "PDFファイルの特徴は何ですか？",
        ["音楽を再生できる", "レイアウトが保持される", "動画を含められない", "編集が簡単"],
        1,
        "PDFは異なる環境でも同じレイアウトで表示できる文書形式です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画ファイル形式でないものはどれですか？",
        ["MP4", "AVI", "MOV", "DOC"],
        3,
        "DOCはMicrosoft Wordの文書ファイル形式です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "入力装置でないものはどれですか？",
        ["キーボード", "マウス", "プリンタ", "スキャナ"],
        2,
        "プリンタは出力装置であり、入力装置ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "タッチパネルの分類として正しいものはどれですか？",
        ["入力装置のみ", "出力装置のみ", "入出力装置", "記憶装置"],
        2,
        "タッチパネルは画面表示（出力）とタッチ操作（入力）の両方が可能な入出力装置です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "QRコードを読み取る装置は何ですか？",
        ["プリンタ", "スピーカー", "カメラ", "マイク"],
        2,
        "QRコードの読み取りにはカメラが使用されます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "解像度が高いディスプレイの特徴は何ですか？",
        ["画面が大きい", "色数が多い", "画像がきめ細かい", "音質が良い"],
        2,
        "解像度が高いほど、より細かく鮮明な画像を表示できます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プリンタの種類でないものはどれですか？",
        ["インクジェット", "レーザー", "ドットインパクト", "ハードディスク"],
        3,
        "ハードディスクは記憶装置であり、プリンタの種類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビット演算のAND演算で、1 AND 0の結果は？",
        ["0", "1", "2", "エラー"],
        0,
        "AND演算では両方が1の場合のみ結果が1になり、それ以外は0です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "2の8乗（2^8）の値は？",
        ["128", "256", "512", "1024"],
        1,
        "2^8 = 256です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数のAは10進数でいくつですか？",
        ["10", "11", "12", "15"],
        0,
        "16進数のAは10進数の10に相当します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "1KB（キロバイト）は何バイトですか？",
        ["1000バイト", "1024バイト", "1048バイト", "1200バイト"],
        1,
        "1KB = 1024バイトです（2^10）。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "バイナリサーチ（二分探索）の計算量は？",
        ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        1,
        "バイナリサーチの時間計算量はO(log n)です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "日本語を扱うための文字コードでないものはどれですか？",
        ["Shift_JIS", "UTF-8", "EUC-JP", "ASCII"],
        3,
        "ASCIIは英数字と記号のみの文字コードで、日本語は扱えません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "UTF-8の特徴として正しいものはどれですか？",
        ["ASCII互換性がある", "固定長エンコーディング", "日本語専用", "8ビット固定"],
        0,
        "UTF-8はASCII文字については同じコードを使用する互換性があります。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "文字化けが起こる原因として最も適切なものはどれですか？",
        ["ファイルサイズが大きい", "文字コードの不一致", "インターネット速度が遅い", "メモリ不足"],
        1,
        "文字化けは主に送信側と受信側の文字コードが異なる場合に発生します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "UnicodeとUTF-8の関係として正しいものはどれですか？",
        ["同じもの", "UTF-8はUnicodeの実装方式の一つ", "競合する規格", "UTF-8が新しい規格"],
        1,
        "UTF-8はUnicode文字セットをバイト列にエンコードする方式の一つです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "全角文字と半角文字の違いは何ですか？",
        ["色の違い", "表示幅の違い", "書体の違い", "言語の違い"],
        1,
        "全角文字は半角文字の2倍の幅で表示される文字です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "人工知能（AI）の技術でないものはどれですか？",
        ["機械学習", "深層学習", "自然言語処理", "ファイル圧縮"],
        3,
        "ファイル圧縮は一般的なデータ処理技術で、AI技術ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習の種類でないものはどれですか？",
        ["教師あり学習", "教師なし学習", "強化学習", "文字認識学習"],
        3,
        "文字認識は機械学習の応用分野であり、学習の種類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ニューラルネットワークが模倣しているものは何ですか？",
        ["コンピュータ回路", "脳の神経細胞", "インターネット", "データベース"],
        1,
        "ニューラルネットワークは人間の脳の神経細胞（ニューロン）の仕組みを模倣しています。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビッグデータの特徴を表す3Vに含まれないものはどれですか？",
        ["Volume（量）", "Velocity（速度）", "Variety（多様性）", "Value（価値）"],
        3,
        "ビッグデータの3VはVolume、Velocity、Varietyです。Valueは4Vとして追加されることがあります。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "自然言語処理の応用例でないものはどれですか？",
        ["機械翻訳", "音声認識", "画像認識", "テキストマイニング"],
        2,
        "画像認識は視覚的情報の処理であり、自然言語処理ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoTの略語として正しいものはどれですか？",
        ["Internet of Technology", "Internet of Things", "Information of Technology", "Integration of Things"],
        1,
        "IoTはInternet of Things（モノのインターネット）の略です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドサービスの種類でないものはどれですか？",
        ["SaaS", "PaaS", "IaaS", "LaaS"],
        3,
        "LaaS（Land as a Service）は一般的なクラウドサービスの分類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "エッジコンピューティングの特徴は何ですか？",
        ["中央サーバーで全て処理", "デバイス近くで処理", "クラウドのみで処理", "処理速度が遅い"],
        1,
        "エッジコンピューティングはデータの発生源に近い場所で処理を行う技術です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "5G通信の特徴でないものはどれですか？",
        ["高速通信", "低遅延", "多数同時接続", "高消費電力"],
        3,
        "5Gは省電力性も特徴の一つで、高消費電力ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートシティで活用される技術でないものはどれですか？",
        ["IoT", "AI", "ビッグデータ", "フロッピーディスク"],
        3,
        "フロッピーディスクは古い記憶媒体で、現在のスマートシティでは使用されません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スタック（Stack）のデータ構造の特徴は何ですか？",
        ["先入れ先出し", "後入れ先出し", "ランダムアクセス", "並列処理"],
        1,
        "スタックはLIFO（Last In, First Out：後入れ先出し）の原理で動作します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キュー（Queue）のデータ構造の特徴は何ですか？",
        ["先入れ先出し", "後入れ先出し", "ランダムアクセス", "双方向アクセス"],
        0,
        "キューはFIFO（First In, First Out：先入れ先出し）の原理で動作します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソートアルゴリズムでないものはどれですか？",
        ["バブルソート", "クイックソート", "マージソート", "ハッシュソート"],
        3,
        "ハッシュソートという標準的なソートアルゴリズムは存在しません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "二分木の特徴として正しいものはどれですか？",
        ["各ノードは最大2つの子を持つ", "リニアな構造", "循環構造", "子は必ず2つ"],
        0,
        "二分木では各ノードが最大2つの子ノードを持つことができます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハッシュテーブルの主な利点は何ですか？",
        ["メモリ効率", "高速な検索", "ソート機能", "データ圧縮"],
        1,
        "ハッシュテーブルは平均的にO(1)の高速な検索が可能です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "マイクロサービスアーキテクチャの特徴として正しくないものはどれですか？",
        ["サービスの独立性", "分散システム", "単一のデータベース", "個別デプロイ"],
        2,
        "マイクロサービスでは各サービスが独自のデータベースを持つのが一般的です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "RESTful APIの特徴として正しいものはどれですか？",
        ["ステートフル", "ステートレス", "XML専用", "セキュリティなし"],
        1,
        "RESTful APIはステートレス（状態を保持しない）なのが特徴です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "負荷分散（Load Balancing）の目的は何ですか？",
        ["セキュリティ強化", "処理の分散", "データの暗号化", "ストレージ拡張"],
        1,
        "負荷分散は複数のサーバーに処理を分散して性能を向上させます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キャッシュの主な目的は何ですか？",
        ["データの永続保存", "アクセス速度の向上", "セキュリティ強化", "データの圧縮"],
        1,
        "キャッシュは頻繁にアクセスされるデータを高速にアクセスできる場所に保存します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "冗長化（Redundancy）の目的は何ですか？",
        ["処理速度向上", "可用性向上", "コスト削減", "容量削減"],
        1,
        "冗長化はシステムの可用性（利用可能性）を向上させるための技術です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Gitの分散バージョン管理システムの特徴として正しいものはどれですか？",
        ["中央サーバーが必須", "ローカルでも完全な履歴を保持", "テキストファイルのみ対応", "インターネット接続が必須"],
        1,
        "Gitは各クライアントが完全なリポジトリの履歴を持つ分散型システムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アジャイル開発の特徴でないものはどれですか？",
        ["短期間でのイテレーション", "顧客との協調", "完璧な仕様書", "変化への対応"],
        2,
        "アジャイル開発では詳細な仕様書よりも動くソフトウェアを重視します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デバッグの目的は何ですか？",
        ["新機能の追加", "プログラムのバグ修正", "性能の向上", "セキュリティ強化"],
        1,
        "デバッグはプログラム中のバグ（不具合）を発見し修正することです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "単体テストの対象は何ですか？",
        ["システム全体", "個別の関数やメソッド", "ユーザーインターフェース", "ネットワーク通信"],
        1,
        "単体テストは個別の関数やメソッドなど最小単位の動作を検証します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "継続的インテグレーション（CI）の利点は何ですか？",
        ["コスト削減", "早期のバグ発見", "開発者数の削減", "機能数の増加"],
        1,
        "CIによりコード変更のたびに自動テストが実行され、バグを早期発見できます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ピクセルとは何ですか？",
        ["画像ファイルの種類", "画像の最小単位", "色の種類", "画像のサイズ"],
        1,
        "ピクセルは画像を構成する最小の単位（画素）です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "RGBの色表現で、白色を表すのはどれですか？",
        ["(0,0,0)", "(255,255,255)", "(255,0,0)", "(0,255,0)"],
        1,
        "RGB表現では(255,255,255)が白色を表します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ベクター画像の特徴は何ですか？",
        ["拡大すると画質が劣化", "拡大しても画質が劣化しない", "色数が限定される", "ファイルサイズが大きい"],
        1,
        "ベクター画像は数式で描画されるため、拡大しても画質が劣化しません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DPI（Dots Per Inch）は何を表しますか？",
        ["色の深度", "画像の解像度", "ファイルサイズ", "圧縮率"],
        1,
        "DPIは1インチあたりのドット数で、印刷時の解像度を表します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アルファチャンネルの役割は何ですか？",
        ["色の明度", "透明度", "彩度", "コントラスト"],
        1,
        "アルファチャンネルは画像の透明度を表すデータです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "音声のサンプリング周波数が高いほど、何が向上しますか？",
        ["ファイルサイズ", "音質", "圧縮率", "再生時間"],
        1,
        "サンプリング周波数が高いほど、より高音質で音声を記録できます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "MP3ファイルの特徴は何ですか？",
        ["無圧縮音声", "可逆圧縮", "非可逆圧縮", "画像ファイル"],
        2,
        "MP3は音質を犠牲にしてファイルサイズを小さくする非可逆圧縮です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ストリーミングの利点は何ですか？",
        ["高音質", "ダウンロード不要でリアルタイム再生", "オフライン再生", "編集機能"],
        1,
        "ストリーミングはファイルをダウンロードせずにリアルタイムで再生できます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画の解像度でフルHDは何ピクセルですか？",
        ["1280×720", "1920×1080", "3840×2160", "720×480"],
        1,
        "フルHD（1080p）の解像度は1920×1080ピクセルです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コーデックの役割は何ですか？",
        ["データの暗号化", "データの圧縮・展開", "ネットワーク通信", "ファイル管理"],
        1,
        "コーデックは音声や動画データを圧縮・展開するソフトウェアです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "表計算ソフトウェアでないものはどれですか？",
        ["Excel", "Numbers", "Calc", "PowerPoint"],
        3,
        "PowerPointはプレゼンテーションソフトウェアです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "表計算ソフトのセル参照で、絶対参照を表す記号は何ですか？",
        ["&", "$", "#", "%"],
        1,
        "$記号を使用して絶対参照（固定参照）を指定します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ワードプロセッサーの主な機能でないものはどれですか？",
        ["文字入力", "書式設定", "表作成", "データベース管理"],
        3,
        "データベース管理は専用のDBMSソフトウェアの機能です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プレゼンテーションソフトの基本単位は何ですか？",
        ["ページ", "スライド", "シート", "フレーム"],
        1,
        "プレゼンテーションソフトではスライドが基本単位です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "メールの機能でないものはどれですか？",
        ["送信", "受信", "転送", "コンパイル"],
        3,
        "コンパイルはプログラミングの機能で、メール機能ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "QRコードが保存できる情報の種類でないものはどれですか？",
        ["URL", "テキスト", "電話番号", "動画ファイル"],
        3,
        "QRコードはテキスト情報を保存でき、動画ファイルそのものは保存できません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブロックチェーンの特徴として正しいものはどれですか？",
        ["中央管理者が必要", "改ざんが困難", "高速処理", "小容量データ専用"],
        1,
        "ブロックチェーンは分散型台帳で改ざんが非常に困難な構造です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "仮想現実（VR）と拡張現実（AR）の違いは何ですか？",
        ["色の違い", "現実世界の情報の重ね合わせの有無", "機器の価格", "開発言語"],
        1,
        "ARは現実世界に仮想情報を重ね合わせ、VRは完全な仮想世界を作り出します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "モバイルアプリの種類でないものはどれですか？",
        ["ネイティブアプリ", "ウェブアプリ", "ハイブリッドアプリ", "デスクトップアプリ"],
        3,
        "デスクトップアプリはPC用のアプリケーションです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビットコインで使用される技術は何ですか？",
        ["AI", "ブロックチェーン", "VR", "IoT"],
        1,
        "ビットコインはブロックチェーン技術を基盤とした暗号通貨です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "変数とは何ですか？",
        ["値を格納する場所", "プログラムの実行", "画面表示", "キーボード入力"],
        0,
        "変数はデータを一時的に格納するためのメモリ上の場所です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "配列の特徴として正しいものはどれですか？",
        ["同じ型のデータを複数格納", "異なる型のデータを格納", "一つのデータのみ格納", "データを格納できない"],
        0,
        "配列は同じデータ型の要素を複数格納できるデータ構造です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "条件分岐に使用される構文はどれですか？",
        ["for", "while", "if", "function"],
        2,
        "if文は条件に応じて処理を分岐させるための構文です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "繰り返し処理を行う構文でないものはどれですか？",
        ["for", "while", "do-while", "switch"],
        3,
        "switchは条件分岐の構文で、繰り返し処理ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "関数の利点として正しくないものはどれですか？",
        ["コードの再利用", "プログラムの分割", "実行速度の向上", "メモリ使用量の削減"],
        3,
        "関数は主にコードの再利用性と保守性を向上させますが、メモリ使用量を削減するものではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "OSの役割として正しくないものはどれですか？",
        ["ハードウェア管理", "アプリケーション実行", "ファイル管理", "電力供給"],
        3,
        "電力供給はハードウェアの役割で、OSの機能ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プロセッサの処理速度を表す単位は何ですか？",
        ["Hz", "GB", "TB", "Mbps"],
        0,
        "プロセッサの処理速度はHz（ヘルツ）で表されます。GHzがよく使われます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キャッシュメモリの特徴として正しいものはどれですか？",
        ["容量が大きい", "アクセス速度が速い", "価格が安い", "電源不要"],
        1,
        "キャッシュメモリは高速アクセスが可能な小容量のメモリです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイルシステムの役割でないものはどれですか？",
        ["ファイルの管理", "ディスクの管理", "ネットワーク通信", "ディレクトリ管理"],
        2,
        "ネットワーク通信は通信プロトコルの役割で、ファイルシステムの機能ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "パスワードの安全性を高める方法として最も効果的でないものはどれですか？",
        ["長いパスワード", "複雑な文字の組み合わせ", "定期的な変更", "同じパスワードの使い回し"],
        3,
        "同じパスワードの使い回しは最も危険な行為です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイアウォールの主な機能は何ですか？",
        ["ウイルススキャン", "ネットワーク通信の制御", "データの暗号化", "バックアップ"],
        1,
        "ファイアウォールは不正なネットワーク通信を遮断する機能です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フィッシング攻撃とは何ですか？",
        ["ウイルス感染", "偽装サイトでの情報詐取", "システムへの不正侵入", "データの破壊"],
        1,
        "フィッシングは偽装したウェブサイトで個人情報を詐取する攻撃です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "暗号化の目的として正しくないものはどれですか？",
        ["データの機密性", "データの完全性", "データの可用性", "データの圧縮"],
        3,
        "暗号化の目的はデータ圧縮ではなく、セキュリティの確保です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "LANとWANの違いとして正しいものはどれですか？",
        ["速度の違い", "範囲の違い", "価格の違い", "色の違い"],
        1,
        "LAN（Local Area Network）は狭い範囲、WAN（Wide Area Network）は広い範囲のネットワークです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DNSの役割は何ですか？",
        ["データの暗号化", "ドメイン名とIPアドレスの変換", "ファイルの転送", "メールの送信"],
        1,
        "DNSはドメイン名をIPアドレスに変換するシステムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTTPSのSが表すものは何ですか？",
        ["Speed", "Secure", "Simple", "Server"],
        1,
        "HTTPSのSはSecure（安全）を意味し、暗号化された通信を示します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "無線LANの暗号化方式として最も安全なものはどれですか？",
        ["WEP", "WPA", "WPA2", "WPA3"],
        3,
        "WPA3は最新で最も安全な無線LAN暗号化方式です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SQLでデータを検索するコマンドはどれですか？",
        ["INSERT", "UPDATE", "DELETE", "SELECT"],
        3,
        "SELECTはデータベースからデータを検索・取得するためのSQL文です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの正規化の目的として正しくないものはどれですか？",
        ["データの重複排除", "データの整合性確保", "処理速度の向上", "データ容量の増加"],
        3,
        "正規化の目的はデータ容量を増加させることではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "主キーの特徴として正しいものはどれですか？",
        ["重複可能", "NULL値可能", "一意性", "変更頻繁"],
        2,
        "主キーは各レコードを一意に識別するためのキーです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "リレーショナルデータベースの特徴でないものはどれですか？",
        ["表形式でのデータ格納", "SQL使用", "階層構造", "正規化"],
        2,
        "階層構造は階層型データベースの特徴で、リレーショナルデータベースではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習の種類でないものはどれですか？",
        ["教師あり学習", "教師なし学習", "強化学習", "反復学習"],
        3,
        "反復学習は機械学習の一般的な分類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ディープラーニングで使用されるニューラルネットワークの特徴は何ですか？",
        ["浅い層構造", "深い層構造", "単純な構造", "線形構造"],
        1,
        "ディープラーニングは多層（深い）ニューラルネットワークを使用します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "自然言語処理の応用例でないものはどれですか？",
        ["翻訳", "音声認識", "画像認識", "テキスト要約"],
        2,
        "画像認識は自然言語処理ではなく、コンピュータビジョンの分野です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビッグデータの特徴「3V」に含まれないものはどれですか？",
        ["Volume（量）", "Velocity（速度）", "Variety（多様性）", "Vision（視覚）"],
        3,
        "ビッグデータの3Vは、Volume、Velocity、Varietyです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェア開発手法として正しくないものはどれですか？",
        ["ウォーターフォール", "アジャイル", "スパイラル", "サーキュラー"],
        3,
        "サーキュラーは一般的なソフトウェア開発手法ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "バージョン管理システムの利点でないものはどれですか？",
        ["変更履歴の管理", "複数人での協働", "バックアップ機能", "実行速度向上"],
        3,
        "バージョン管理システムは実行速度を向上させるものではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "テストの種類でないものはどれですか？",
        ["単体テスト", "結合テスト", "システムテスト", "速度テスト"],
        3,
        "速度テストは性能テストの一種で、一般的なテスト分類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デバッグの目的は何ですか？",
        ["プログラムの高速化", "バグの発見と修正", "コードの短縮", "メモリの節約"],
        1,
        "デバッグはプログラムのバグ（不具合）を発見し修正することです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドサービスの種類でないものはどれですか？",
        ["SaaS", "PaaS", "IaaS", "DaaS"],
        3,
        "DaaSは一般的なクラウドサービスの分類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SaaSの特徴として正しいものはどれですか？",
        ["ハードウェア提供", "プラットフォーム提供", "ソフトウェア提供", "ネットワーク提供"],
        2,
        "SaaS（Software as a Service）は完成したソフトウェアをサービスとして提供します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドの利点でないものはどれですか？",
        ["初期費用削減", "拡張性", "運用負荷軽減", "完全なセキュリティ保証"],
        3,
        "クラウドでも完全なセキュリティは保証されません。適切な設定が必要です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "パブリッククラウドの特徴として正しいものはどれですか？",
        ["自社専用", "社内設置", "インターネット経由", "オフライン使用"],
        2,
        "パブリッククラウドはインターネット経由で利用する共有サービスです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoTデバイスの特徴でないものはどれですか？",
        ["インターネット接続", "センサー搭載", "データ収集", "人間の操作必須"],
        3,
        "IoTデバイスは自動的にデータを収集・送信し、人間の操作を必要としません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoTで使用される通信技術でないものはどれですか？",
        ["Wi-Fi", "Bluetooth", "LTE", "VGA"],
        3,
        "VGAは映像出力の規格で、IoT通信技術ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートホームの例でないものはどれですか？",
        ["自動照明", "温度調節", "防犯カメラ", "手動ドア"],
        3,
        "手動ドアはスマートホームの自動化技術ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像ファイル形式でないものはどれですか？",
        ["JPEG", "PNG", "GIF", "MP3"],
        3,
        "MP3は音声ファイル形式で、画像ファイル形式ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "音声ファイル形式でないものはどれですか？",
        ["WAV", "MP3", "AAC", "PDF"],
        3,
        "PDFは文書ファイル形式で、音声ファイル形式ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像の解像度を表す単位は何ですか？",
        ["dpi", "Hz", "MB", "Mbps"],
        0,
        "dpi（dots per inch）は画像の解像度を表す単位です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ゲームエンジンの例でないものはどれですか？",
        ["Unity", "Unreal Engine", "Photoshop", "Godot"],
        2,
        "Photoshopは画像編集ソフトで、ゲームエンジンではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "VR（仮想現実）の特徴として正しいものはどれですか？",
        ["現実世界の拡張", "完全な仮想世界", "音声のみの体験", "文字のみの表示"],
        1,
        "VRは完全に仮想的な世界を作り出す技術です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "e-learningの利点でないものはどれですか？",
        ["時間の自由度", "場所の自由度", "個人ペース", "対面の必須性"],
        3,
        "e-learningは対面を必要とせず、オンラインで学習できることが利点です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "MOOCs（大規模オンライン講座）の特徴でないものはどれですか？",
        ["大規模受講", "オンライン開催", "無料または低価格", "少人数制"],
        3,
        "MOOCSは大規模な受講者数が特徴で、少人数制ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数25を2進数に変換すると？",
        ["11001", "11010", "11011", "11100"],
        0,
        "25 = 16 + 8 + 1 = 11001₂",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数11110を10進数に変換すると？",
        ["28", "29", "30", "31"],
        2,
        "16 + 8 + 4 + 2 + 0 = 30",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数A0を10進数に変換すると？",
        ["160", "170", "180", "190"],
        0,
        "A(10) × 16 + 0 = 160",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データ転送速度の単位でないものはどれですか？",
        ["bps", "Mbps", "Gbps", "fps"],
        3,
        "fpsはframe per secondで、動画のフレームレートの単位です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "1GBは何MBですか？",
        ["1000MB", "1024MB", "1GB=MB", "512MB"],
        1,
        "1GB = 1024MBです（2進接頭辞）。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CPUの性能を表す指標でないものはどれですか？",
        ["クロック周波数", "コア数", "キャッシュサイズ", "画面サイズ"],
        3,
        "画面サイズはディスプレイの仕様で、CPUの性能指標ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "グリーンITの目的として正しくないものはどれですか？",
        ["消費電力削減", "CO2排出削減", "環境負荷軽減", "処理速度向上"],
        3,
        "グリーンITは環境負荷軽減が目的で、処理速度向上が主目的ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "電子廃棄物の問題でないものはどれですか？",
        ["有害物質", "リサイクル困難", "処理費用", "高性能化"],
        3,
        "高性能化は電子廃棄物の問題ではなく、技術進歩の結果です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "著作権の保護対象でないものはどれですか？",
        ["文章", "音楽", "画像", "アイデア"],
        3,
        "アイデア自体は著作権で保護されません。具体的な表現が保護対象です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "個人情報保護法で保護される情報でないものはどれですか？",
        ["氏名", "住所", "電話番号", "天気情報"],
        3,
        "天気情報は公開情報で、個人情報ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブロックチェーンの特徴でないものはどれですか？",
        ["分散管理", "改ざん困難", "透明性", "中央集権"],
        3,
        "ブロックチェーンは分散型技術で、中央集権的ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "量子コンピュータの特徴として正しいものはどれですか？",
        ["従来と同じ原理", "量子ビット使用", "低消費電力", "小型化容易"],
        1,
        "量子コンピュータは量子ビット（qubit）を使用して計算を行います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DX（デジタルトランスフォーメーション）の目的でないものはどれですか？",
        ["業務効率化", "新しい価値創造", "競争力向上", "人員削減"],
        3,
        "DXの主目的は人員削減ではなく、デジタル技術による価値創造です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "KPIとは何の略ですか？",
        ["Key Performance Indicator", "Keep Performance Index", "Kind Personal Information", "Key Process Integration"],
        0,
        "KPIはKey Performance Indicator（重要業績評価指標）の略です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "マイクロサービスアーキテクチャの利点でないものはどれですか？",
        ["独立性", "拡張性", "技術多様性", "管理の簡単さ"],
        3,
        "マイクロサービスは管理が複雑になる傾向があります。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "レスポンシブデザインとは何ですか？",
        ["高速なデザイン", "デバイスに応じたデザイン", "色鮮やかなデザイン", "3Dデザイン"],
        1,
        "レスポンシブデザインは様々なデバイスサイズに対応するWebデザイン手法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータで使用される最小の情報単位は何ですか？",
        ["バイト", "ビット", "ワード", "文字"],
        1,
        "ビットは0または1を表すコンピュータの最小情報単位です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアの種類でないものはどれですか？",
        ["システムソフトウェア", "アプリケーションソフトウェア", "ミドルウェア", "ハードウェア"],
        3,
        "ハードウェアは物理的な装置で、ソフトウェアではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミング言語の種類でないものはどれですか？",
        ["Java", "Python", "C++", "HTML"],
        3,
        "HTMLはマークアップ言語で、プログラミング言語ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スタックの特徴として正しいものはどれですか？",
        ["FIFO", "LIFO", "ランダムアクセス", "ソート済み"],
        1,
        "スタックはLIFO（Last In, First Out：後入れ先出し）の構造です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キューの特徴として正しいものはどれですか？",
        ["LIFO", "FIFO", "ランダムアクセス", "ソート済み"],
        1,
        "キューはFIFO（First In, First Out：先入れ先出し）の構造です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "二分探索の計算量は何ですか？",
        ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        1,
        "二分探索の時間計算量はO(log n)です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソートアルゴリズムでないものはどれですか？",
        ["バブルソート", "クイックソート", "マージソート", "リニアサーチ"],
        3,
        "リニアサーチは探索アルゴリズムで、ソートアルゴリズムではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "過学習（オーバーフィッティング）とは何ですか？",
        ["学習不足", "訓練データに特化しすぎること", "学習時間が長すぎること", "データが多すぎること"],
        1,
        "過学習は訓練データに過度に適応し、新しいデータへの汎化性能が低下することです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クロスバリデーションの目的は何ですか？",
        ["学習速度向上", "モデル性能の評価", "データ量増加", "計算量削減"],
        1,
        "クロスバリデーションはモデルの汎化性能を評価する手法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "決定木の利点でないものはどれですか？",
        ["解釈しやすい", "非線形関係対応", "高精度保証", "実装簡単"],
        2,
        "決定木は必ずしも高精度を保証するものではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SQLインジェクションの対策として最も効果的なものはどれですか？",
        ["パスワード強化", "プリペアドステートメント", "暗号化", "バックアップ"],
        1,
        "プリペアドステートメントはSQLインジェクション攻撃を防ぐ最も効果的な方法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "XSS（クロスサイトスクリプティング）攻撃の特徴は何ですか？",
        ["SQLの不正実行", "悪意あるスクリプト実行", "パスワード解析", "ネットワーク傍受"],
        1,
        "XSSは悪意のあるスクリプトをWebページに埋め込む攻撃です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSRF（クロスサイトリクエストフォージェリ）攻撃とは何ですか？",
        ["パスワード盗取", "なりすまし操作", "データ改ざん", "サービス停止"],
        1,
        "CSRFはユーザになりすまして不正な操作を実行させる攻撃です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "第1正規形の条件として正しいものはどれですか？",
        ["主キー存在", "原子性", "関数従属", "結合従属"],
        1,
        "第1正規形では各セルが分割不可能な値（原子的値）を持つ必要があります。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "外部キーの役割は何ですか？",
        ["一意性保証", "参照整合性", "データ型制約", "値の範囲制約"],
        1,
        "外部キーは他のテーブルとの参照整合性を保つ役割があります。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "インデックスの効果として正しくないものはどれですか？",
        ["検索速度向上", "ソート速度向上", "更新速度向上", "結合速度向上"],
        2,
        "インデックスは検索を高速化しますが、更新処理は遅くなります。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブラックボックステストの特徴は何ですか？",
        ["内部構造を考慮", "外部仕様に基づく", "コードカバレッジ重視", "開発者が実施"],
        1,
        "ブラックボックステストは内部構造を知らずに外部仕様に基づいて行うテストです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ホワイトボックステストで使用される指標でないものはどれですか？",
        ["命令カバレッジ", "分岐カバレッジ", "条件カバレッジ", "要件カバレッジ"],
        3,
        "要件カバレッジはブラックボックステストで使用される指標です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "回帰テストの目的は何ですか？",
        ["新機能のテスト", "性能のテスト", "既存機能の動作確認", "セキュリティのテスト"],
        2,
        "回帰テストは変更により既存機能に問題が生じていないかを確認するテストです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アジャイル開発の特徴でないものはどれですか？",
        ["反復開発", "顧客協調", "変化対応", "詳細計画重視"],
        3,
        "アジャイル開発は変化に対応することを重視し、詳細な事前計画よりも適応を重視します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スクラムの役割でないものはどれですか？",
        ["プロダクトオーナー", "スクラムマスター", "開発チーム", "プロジェクトマネージャー"],
        3,
        "プロジェクトマネージャーはスクラムの正式な役割ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スプリントとは何ですか？",
        ["高速実行", "短期間の開発サイクル", "テスト手法", "設計手法"],
        1,
        "スプリントはスクラムにおける短期間（通常1-4週間）の開発サイクルです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "iOSアプリ開発で使用される言語でないものはどれですか？",
        ["Swift", "Objective-C", "Java", "C"],
        2,
        "JavaはAndroidアプリ開発で主に使用され、iOSでは一般的ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Android OSの基盤となっているカーネルは何ですか？",
        ["Windows NT", "Linux", "macOS", "Unix"],
        1,
        "Android OSはLinuxカーネルをベースに構築されています。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プッシュ通知の特徴でないものはどれですか？",
        ["リアルタイム配信", "アプリ非起動時も受信", "ユーザー操作必要", "サーバーから送信"],
        2,
        "プッシュ通知はユーザー操作なしに自動的に配信されます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドネイティブアプリケーションの特徴でないものはどれですか？",
        ["マイクロサービス", "コンテナ化", "自動スケーリング", "モノリシック構造"],
        3,
        "モノリシック構造はクラウドネイティブとは対照的なアーキテクチャです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DevOpsの目的として正しいものはどれですか？",
        ["開発とテストの分離", "開発と運用の連携", "コスト削減のみ", "人員削減"],
        1,
        "DevOpsは開発（Development）と運用（Operations）の連携を促進する手法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンテナ技術の利点でないものはどれですか？",
        ["環境の一貫性", "軽量性", "ポータビリティ", "ハードウェア性能向上"],
        3,
        "コンテナ技術はハードウェア性能自体を向上させるものではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "APIの種類でないものはどれですか？",
        ["REST", "GraphQL", "SOAP", "HTML"],
        3,
        "HTMLはマークアップ言語で、APIの種類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "マルウェアの種類でないものはどれですか？",
        ["ウイルス", "ワーム", "トロイの木馬", "ファイアウォール"],
        3,
        "ファイアウォールはセキュリティ保護機能で、マルウェアではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "TCP/IPモデルの層数は何層ですか？",
        ["3層", "4層", "5層", "7層"],
        1,
        "TCP/IPモデルは4層構造です（OSI参照モデルは7層）。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CDNの主な目的は何ですか？",
        ["セキュリティ向上", "コンテンツ配信の高速化", "データベース管理", "プログラミング支援"],
        1,
        "CDN（Content Delivery Network）はコンテンツ配信を高速化するシステムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ロードバランサーの役割は何ですか？",
        ["データ暗号化", "負荷分散", "ウイルス検知", "ファイル圧縮"],
        1,
        "ロードバランサーは複数のサーバに負荷を分散する装置です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "NoSQLデータベースの特徴でないものはどれですか？",
        ["柔軟なスキーマ", "高いスケーラビリティ", "SQL必須", "分散処理対応"],
        2,
        "NoSQLはSQL不要のデータベースで、SQLが必須ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Gitの分散バージョン管理の利点でないものはどれですか？",
        ["オフライン作業可能", "複数人での協働", "履歴管理", "集中管理必須"],
        3,
        "Gitは分散型なので、集中管理は必須ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSの役割は何ですか？",
        ["データ処理", "Webページのスタイル設定", "プログラム実行", "データベース操作"],
        1,
        "CSS（Cascading Style Sheets）はWebページの見た目やレイアウトを設定します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "JavaScriptの実行環境でないものはどれですか？",
        ["ブラウザ", "Node.js", "サーバーサイド", "Excel"],
        3,
        "ExcelはJavaScriptの一般的な実行環境ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "レスポンシブWebデザインで使用される技術でないものはどれですか？",
        ["メディアクエリ", "フレキシブルグリッド", "可変画像", "固定幅レイアウト"],
        3,
        "固定幅レイアウトはレスポンシブデザインとは対照的な手法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "PWA（Progressive Web App）の特徴でないものはどれですか？",
        ["オフライン動作", "プッシュ通知", "アプリストア配布必須", "ホーム画面追加"],
        2,
        "PWAはアプリストアを経由せずに配布・インストールできます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SPA（Single Page Application）の特徴は何ですか？",
        ["複数ページ構成", "単一ページで動的更新", "サーバーサイド処理", "静的コンテンツのみ"],
        1,
        "SPAは単一のページで動的にコンテンツを更新するWebアプリケーションです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "WebSocketの利点は何ですか？",
        ["セキュリティ向上", "リアルタイム双方向通信", "ファイルサイズ削減", "バッテリー節約"],
        1,
        "WebSocketはサーバーとクライアント間のリアルタイム双方向通信を実現します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "OAuth2.0の目的は何ですか？",
        ["データ暗号化", "認証と認可", "ファイル転送", "画像処理"],
        1,
        "OAuth2.0は安全な認証と認可を行うためのプロトコルです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "JWTトークンの特徴でないものはどれですか？",
        ["自己完結型", "JSON形式", "暗号化必須", "ステートレス"],
        2,
        "JWTは署名されますが、必ずしも暗号化される必要はありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "マイクロフロントエンドのアーキテクチャの利点でないものはどれですか？",
        ["独立したデプロイ", "技術スタックの多様性", "チーム独立性", "実装の単純化"],
        3,
        "マイクロフロントエンドは実装を複雑化する傾向があります。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "GraphQLのRESTとの違いでないものはどれですか？",
        ["単一エンドポイント", "クエリ言語使用", "過剰取得回避", "HTTPプロトコル不使用"],
        3,
        "GraphQLもHTTPプロトコルを使用できます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Dockerコンテナの利点でないものはどれですか？",
        ["環境一貫性", "リソース効率", "高速起動", "ハードウェア性能向上"],
        3,
        "Dockerはハードウェア性能自体を向上させません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Kubernetesの役割は何ですか？",
        ["データベース管理", "コンテナオーケストレーション", "プログラムコンパイル", "ファイル転送"],
        1,
        "Kubernetesはコンテナアプリケーションの配置、管理、スケーリングを自動化します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CI/CDパイプラインの利点でないものはどれですか？",
        ["自動化", "品質向上", "高速デプロイ", "手動テスト増加"],
        3,
        "CI/CDは手動テストを減らし、自動化を促進します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Infrastructure as Code（IaC）の利点でないものはどれですか？",
        ["再現性", "バージョン管理", "自動化", "手動設定重視"],
        3,
        "IaCは手動設定を排除し、コードによる自動化を重視します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "サーバーレスアーキテクチャの特徴でないものはどれですか？",
        ["関数ベース", "従量課金", "自動スケーリング", "サーバー管理必要"],
        3,
        "サーバーレスではサーバーの管理が不要です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "エッジコンピューティングの目的は何ですか？",
        ["コスト削減", "低遅延処理", "セキュリティ向上", "プログラミング簡素化"],
        1,
        "エッジコンピューティングはユーザーに近い場所で処理を行い、遅延を削減します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビッグデータの処理フレームワークでないものはどれですか？",
        ["Hadoop", "Spark", "Storm", "MySQL"],
        3,
        "MySQLは従来のリレーショナルデータベースで、ビッグデータ処理フレームワークではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データウェアハウスの特徴でないものはどれですか？",
        ["履歴データ保存", "分析向け最適化", "リアルタイム更新", "大容量データ"],
        2,
        "データウェアハウスは通常バッチ処理で更新され、リアルタイム更新は特徴ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ETLプロセスのEは何を表しますか？",
        ["Execute", "Extract", "Encrypt", "Export"],
        1,
        "ETLのEはExtract（抽出）を表します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データマイニングの目的でないものはどれですか？",
        ["パターン発見", "予測分析", "関係性発見", "データ削除"],
        3,
        "データマイニングはデータからパターンや知識を発見することが目的です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習の評価指標でないものはどれですか？",
        ["精度", "再現率", "F値", "クロック数"],
        3,
        "クロック数はCPUの性能指標で、機械学習の評価指標ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ニューラルネットワークの基本単位は何ですか？",
        ["ノード", "エッジ", "レイヤー", "ウェイト"],
        0,
        "ニューラルネットワークの基本単位はノード（ニューロン）です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "畳み込みニューラルネットワーク（CNN）が得意とする分野は何ですか？",
        ["音声認識", "画像認識", "自然言語処理", "数値予測"],
        1,
        "CNNは特に画像認識タスクに優れた性能を発揮します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "リカレントニューラルネットワーク（RNN）が得意とする分野は何ですか？",
        ["画像認識", "時系列データ処理", "分類問題", "回帰問題"],
        1,
        "RNNは時系列データや自然言語処理に適したネットワークです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "転移学習の利点でないものはどれですか？",
        ["学習時間短縮", "データ量削減", "精度向上", "計算量増加"],
        3,
        "転移学習は既存モデルを活用するため、計算量を削減できます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "強化学習の要素でないものはどれですか？",
        ["エージェント", "環境", "報酬", "教師データ"],
        3,
        "強化学習は教師なし学習の一種で、教師データは必要ありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アンサンブル学習の手法でないものはどれですか？",
        ["バギング", "ブースティング", "スタッキング", "プルーニング"],
        3,
        "プルーニングは決定木の枝刈り手法で、アンサンブル学習ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラスタリングの手法でないものはどれですか？",
        ["k-means", "階層クラスタリング", "DBSCAN", "線形回帰"],
        3,
        "線形回帰は教師あり学習で、クラスタリング手法ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "次元削減の手法でないものはどれですか？",
        ["PCA", "t-SNE", "LDA", "SVM"],
        3,
        "SVMは分類・回帰アルゴリズムで、次元削減手法ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "自然言語処理のタスクでないものはどれですか？",
        ["感情分析", "機械翻訳", "音声認識", "画像分類"],
        3,
        "画像分類は自然言語処理ではなく、コンピュータビジョンのタスクです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報検索の評価指標でないものはどれですか？",
        ["適合率", "再現率", "F値", "分散"],
        3,
        "分散は統計的指標で、情報検索の評価指標ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "レコメンドシステムの手法でないものはどれですか？",
        ["協調フィルタリング", "コンテンツベース", "ハイブリッド", "バイナリ分類"],
        3,
        "バイナリ分類は機械学習の分類タスクで、レコメンド手法ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "A/Bテストの目的は何ですか？",
        ["バグ発見", "性能測定", "効果比較", "セキュリティ検証"],
        2,
        "A/Bテストは異なるバージョンの効果を比較する手法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ユーザビリティテストの目的でないものはどれですか？",
        ["使いやすさ評価", "ユーザー行動分析", "改善点発見", "プログラムの最適化"],
        3,
        "ユーザビリティテストはプログラムの最適化ではなく、ユーザー体験の評価が目的です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アクセシビリティの配慮として正しくないものはどれですか？",
        ["代替テキスト", "キーボード操作対応", "色のみでの情報伝達", "音声読み上げ対応"],
        2,
        "色のみでの情報伝達は色覚障害者に配慮していません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "PWA（Progressive Web App）で使用される技術でないものはどれですか？",
        ["Service Worker", "Web App Manifest", "Cache API", "ActiveX"],
        3,
        "ActiveXは古いMicrosoft技術で、PWAでは使用されません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webパフォーマンス最適化の手法でないものはどれですか？",
        ["画像圧縮", "CDN使用", "コード分割", "CPU増設"],
        3,
        "CPU増設はハードウェアの改善で、Webパフォーマンス最適化の手法ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SEO（検索エンジン最適化）の要素でないものはどれですか？",
        ["メタタグ", "キーワード", "ページ速度", "CPU性能"],
        3,
        "CPU性能はSEOの直接的な要素ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "モバイルファーストデザインの考え方は何ですか？",
        ["PCを優先", "モバイルから設計開始", "タブレット中心", "すべて同時設計"],
        1,
        "モバイルファーストはモバイル向けデザインから開始し、大画面に拡張する設計手法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Cross-Origin Resource Sharing（CORS）の目的は何ですか？",
        ["性能向上", "セキュリティ制御", "ファイル圧縮", "画像最適化"],
        1,
        "CORSは異なるオリジン間のリソース共有を安全に制御するメカニズムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "XMLとJSONの違いとして正しくないものはどれですか？",
        ["構文の違い", "サイズの違い", "可読性の違い", "機能の完全一致"],
        3,
        "XMLとJSONは異なる特徴を持ち、機能が完全に一致するわけではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "MEAN stackに含まれない技術はどれですか？",
        ["MongoDB", "Express.js", "Angular", "Ruby"],
        3,
        "MEAN stackはMongoDB、Express.js、Angular、Node.jsで構成されます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "LAMP stackに含まれない技術はどれですか？",
        ["Linux", "Apache", "MySQL", "Node.js"],
        3,
        "LAMP stackはLinux、Apache、MySQL、PHPで構成されます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フロントエンドフレームワークでないものはどれですか？",
        ["React", "Vue.js", "Angular", "Django"],
        3,
        "DjangoはPythonのバックエンドフレームワークです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "バックエンドフレームワークでないものはどれですか？",
        ["Express.js", "Django", "Spring", "Bootstrap"],
        3,
        "BootstrapはCSSフレームワークで、バックエンドフレームワークではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの種類でないものはどれですか？",
        ["リレーショナル", "NoSQL", "グラフ", "リニア"],
        3,
        "リニアは一般的なデータベースの分類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キャッシュの種類でないものはどれですか？",
        ["ブラウザキャッシュ", "CDNキャッシュ", "データベースキャッシュ", "ユーザーキャッシュ"],
        3,
        "ユーザーキャッシュは一般的なキャッシュの分類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ログレベルの種類でないものはどれですか？",
        ["DEBUG", "INFO", "ERROR", "SECURE"],
        3,
        "SECUREは一般的なログレベルではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "メッセージキューの利点でないものはどれですか？",
        ["非同期処理", "負荷平準化", "システム分離", "処理速度向上保証"],
        3,
        "メッセージキューは処理速度向上を保証するものではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "マイクロサービスの通信方式でないものはどれですか？",
        ["HTTP/REST", "gRPC", "メッセージング", "直接メモリアクセス"],
        3,
        "直接メモリアクセスはマイクロサービス間通信には使用されません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "API設計のベストプラクティスでないものはどれですか？",
        ["一貫性のあるURL", "適切なHTTPメソッド", "バージョニング", "すべてGETメソッド"],
        3,
        "すべてGETメソッドで統一するのは適切なAPI設計ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "監視・ロギングツールでないものはどれですか？",
        ["Prometheus", "Grafana", "ELK Stack", "Photoshop"],
        3,
        "Photoshopは画像編集ソフトで、監視・ロギングツールではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コードレビューの目的でないものはどれですか？",
        ["品質向上", "知識共有", "バグ発見", "開発速度優先"],
        3,
        "コードレビューは品質を重視し、必ずしも開発速度を優先するものではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "技術的負債の原因でないものはどれですか？",
        ["急いだ実装", "設計不備", "ドキュメント不足", "十分な計画"],
        3,
        "十分な計画は技術的負債を防ぐ要因です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スケーラビリティの種類でないものはどれですか？",
        ["水平スケーリング", "垂直スケーリング", "対角線スケーリング", "自動スケーリング"],
        2,
        "対角線スケーリングは一般的なスケーラビリティの分類ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "障害対応の手順でないものはどれですか？",
        ["検知", "対応", "復旧", "隠蔽"],
        3,
        "隠蔽は適切な障害対応手順ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SLAで定義される項目でないものはどれですか？",
        ["可用性", "性能", "サポート", "開発言語"],
        3,
        "開発言語はSLA（Service Level Agreement）で定義される項目ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "災害復旧計画（DRP）の要素でないものはどれですか？",
        ["バックアップ", "復旧手順", "連絡体制", "新機能開発"],
        3,
        "新機能開発は災害復旧計画の要素ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報セキュリティの3要素でないものはどれですか？",
        ["機密性", "完全性", "可用性", "拡張性"],
        3,
        "情報セキュリティの3要素は機密性、完全性、可用性です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "認証と認可の違いとして正しいものはどれですか？",
        ["同じ意味", "認証は本人確認、認可は権限確認", "認証は権限、認可は本人", "どちらも暗号化"],
        1,
        "認証は本人確認、認可はアクセス権限の確認です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハッシュ関数の特徴でないものはどれですか？",
        ["一方向性", "決定性", "衝突耐性", "可逆性"],
        3,
        "ハッシュ関数は一方向性を持ち、可逆的ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "公開鍵暗号方式の特徴でないものはどれですか？",
        ["鍵ペア使用", "鍵配送問題解決", "高速処理", "デジタル署名可能"],
        2,
        "公開鍵暗号は共通鍵暗号より処理が重く、高速処理は特徴ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "VPN（Virtual Private Network）の目的は何ですか？",
        ["速度向上", "安全な通信", "ファイル共有", "画面共有"],
        1,
        "VPNはインターネット上で安全な通信経路を確立する技術です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ゼロトラスト・セキュリティの考え方は何ですか？",
        ["内部は信頼", "すべて信頼しない", "外部のみ警戒", "パスワードのみで保護"],
        1,
        "ゼロトラストは内部・外部を問わず、すべてを信頼しないセキュリティモデルです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ペネトレーションテストの目的は何ですか？",
        ["性能測定", "セキュリティ脆弱性発見", "機能テスト", "ユーザビリティ確認"],
        1,
        "ペネトレーションテストはシステムのセキュリティ脆弱性を発見するテストです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "OWASP Top 10の目的は何ですか？",
        ["性能指標", "Webアプリケーションセキュリティリスクの啓発", "プログラミング教育", "データベース設計"],
        1,
        "OWASP Top 10はWebアプリケーションの主要なセキュリティリスクを示すリストです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "インシデント対応の最初のステップは何ですか？",
        ["修復", "検知・報告", "分析", "事後対応"],
        1,
        "インシデント対応では最初に検知と報告を行います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フォレンジック調査の目的でないものはどれですか？",
        ["証拠保全", "原因調査", "法的対応", "システム高速化"],
        3,
        "フォレンジック調査はシステム高速化が目的ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンプライアンスの意味は何ですか？",
        ["性能向上", "法令遵守", "コスト削減", "機能追加"],
        1,
        "コンプライアンスは法令や規則を遵守することです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "GDPR（一般データ保護規則）の対象地域はどこですか？",
        ["アメリカ", "日本", "EU", "中国"],
        2,
        "GDPRは欧州連合（EU）の個人データ保護に関する規則です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データの匿名化の目的は何ですか？",
        ["処理速度向上", "プライバシー保護", "容量削減", "品質向上"],
        1,
        "データの匿名化は個人を特定できないようにしてプライバシーを保護することです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "エシカルハッキングとは何ですか？",
        ["悪意のある攻撃", "合法的なセキュリティテスト", "データ窃取", "システム破壊"],
        1,
        "エシカルハッキングは許可を得て行う合法的なセキュリティテストです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソーシャルエンジニアリング攻撃の特徴は何ですか？",
        ["技術的攻撃", "人間の心理を悪用", "システム脆弱性利用", "物理的破壊"],
        1,
        "ソーシャルエンジニアリングは人間の心理的弱点を悪用する攻撃手法です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ランサムウェアの特徴は何ですか？",
        ["データ窃取", "データ暗号化と身代金要求", "システム監視", "性能向上"],
        1,
        "ランサムウェアはデータを暗号化して身代金を要求する悪意のあるソフトウェアです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "APT（Advanced Persistent Threat）攻撃の特徴は何ですか？",
        ["短期間攻撃", "長期間潜伏", "単発攻撃", "ランダム攻撃"],
        1,
        "APT攻撃は長期間システムに潜伏し、継続的に活動する高度な攻撃です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハニーポットの目的は何ですか？",
        ["性能向上", "攻撃者の誘い込み", "データバックアップ", "ユーザー認証"],
        1,
        "ハニーポットは攻撃者を誘い込んで行動を観察・分析するためのシステムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DDoS攻撃の対策として効果的でないものはどれですか？",
        ["CDN使用", "レート制限", "パスワード強化", "トラフィック分散"],
        2,
        "パスワード強化はDDoS攻撃の直接的な対策にはなりません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "IPSとIDSの違いは何ですか？",
        ["検知と防御", "同じ機能", "速度の違い", "価格の違い"],
        0,
        "IDSは侵入検知、IPSは侵入防御を行います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "WAF（Web Application Firewall）の主な機能は何ですか？",
        ["ネットワーク監視", "Webアプリケーション保護", "データベース管理", "ファイル転送"],
        1,
        "WAFはWebアプリケーションレベルでの攻撃を防御するファイアウォールです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SIEM（Security Information and Event Management）の目的は何ですか？",
        ["データ保存", "セキュリティ情報の統合管理", "性能監視", "バックアップ"],
        1,
        "SIEMはセキュリティ情報とイベントを統合して管理・分析するシステムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "多要素認証で使用される要素でないものはどれですか？",
        ["知識要素", "所持要素", "生体要素", "時間要素"],
        3,
        "多要素認証は知識、所持、生体の3要素を組み合わせます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CAPTCHA（キャプチャ）の目的は何ですか？",
        ["パスワード強化", "ボット対策", "暗号化", "ログ記録"],
        1,
        "CAPTCHAは自動化されたボットと人間を区別するための仕組みです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "セキュアコーディングの原則でないものはどれですか？",
        ["最小権限の原則", "縦深防御", "セキュリティ・バイ・デザイン", "機能優先の原則"],
        3,
        "セキュアコーディングでは機能よりもセキュリティを重視します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "脆弱性の評価システムでないものはどれですか？",
        ["CVSS", "CVE", "OWASP", "HTML"],
        3,
        "HTMLはマークアップ言語で、脆弱性評価システムではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "パッチマネジメントの重要性でないものはどれですか？",
        ["脆弱性修正", "セキュリティ向上", "システム安定性", "開発速度向上"],
        3,
        "パッチマネジメントの主目的は開発速度向上ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル証明書の役割でないものはどれですか？",
        ["身元証明", "通信暗号化", "デジタル署名", "パフォーマンス向上"],
        3,
        "デジタル証明書はパフォーマンス向上のためのものではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "PKI（Public Key Infrastructure）の構成要素でないものはどれですか？",
        ["認証局", "証明書", "失効リスト", "ウイルススキャン"],
        3,
        "ウイルススキャンはPKIの構成要素ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "暗号化アルゴリズムの種類でないものはどれですか？",
        ["AES", "RSA", "SHA", "HTTP"],
        3,
        "HTTPは通信プロトコルで、暗号化アルゴリズムではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "量子暗号の特徴として正しいものはどれですか？",
        ["高速処理", "理論的に破られない", "低コスト", "簡単実装"],
        1,
        "量子暗号は量子力学の原理により理論的に破ることができない暗号技術です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブロックチェーンのコンセンサスアルゴリズムでないものはどれですか？",
        ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of Speed"],
        3,
        "Proof of Speedは一般的なコンセンサスアルゴリズムではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートコントラクトの特徴でないものはどれですか？",
        ["自動実行", "改ざん困難", "中央管理者不要", "手動承認必須"],
        3,
        "スマートコントラクトは自動実行され、手動承認は必須ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DeFi（分散型金融）の特徴でないものはどれですか？",
        ["分散型", "透明性", "プログラマブル", "中央銀行管理"],
        3,
        "DeFiは中央銀行や金融機関を必要としない分散型金融システムです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "NFT（非代替性トークン）の特徴は何ですか？",
        ["代替可能", "一意性", "分割可能", "複製可能"],
        1,
        "NFTは各トークンが一意で代替不可能な特徴を持ちます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Web3の概念に含まれないものはどれですか？",
        ["分散化", "ブロックチェーン", "暗号通貨", "中央集権管理"],
        3,
        "Web3は分散化を重視し、中央集権管理とは対照的な概念です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "メタバースの要素でないものはどれですか？",
        ["仮想空間", "アバター", "社会的交流", "物理的制約"],
        3,
        "メタバースは物理的制約を超えた仮想的な世界です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アジャイル開発のスプリントレトロスペクティブの目的は何ですか？",
        ["次のスプリント計画", "プロセス改善", "成果物確認", "予算検討"],
        1,
        "スプリントレトロスペクティブは開発プロセスの振り返りと改善を行います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "TDD（テスト駆動開発）の手順として正しいものはどれですか？",
        ["実装→テスト→リファクタリング", "テスト→実装→リファクタリング", "設計→実装→テスト", "計画→実装→デプロイ"],
        1,
        "TDDは「Red-Green-Refactor」サイクルで、テストを最初に書きます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "BDD（振る舞い駆動開発）で使用される記法は何ですか？",
        ["Given-When-Then", "If-Then-Else", "Try-Catch-Finally", "Create-Read-Update"],
        0,
        "BDDではGiven-When-Then形式でテストシナリオを記述します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "継続的デリバリー（CD）と継続的デプロイメント（CD）の違いは何ですか？",
        ["同じ意味", "手動承認の有無", "速度の違い", "コストの違い"],
        1,
        "継続的デリバリーは手動承認あり、継続的デプロイメントは完全自動化です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "フィーチャーフラグ（機能フラグ）の利点でないものはどれですか？",
        ["段階的リリース", "A/Bテスト", "緊急停止", "コード削減"],
        3,
        "フィーチャーフラグは機能の制御を可能にしますが、コード削減が主目的ではありません。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "技術選定時に考慮すべき要素でないものはどれですか？",
        ["学習コスト", "コミュニティ", "ライセンス", "個人的好み"],
        3,
        "技術選定では客観的な要素を重視し、個人的好みは適切な判断基準ではありません。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "パソコンの電源を入れてから使えるようになるまでの処理を何と言いますか？",
        ["ログイン", "ブート", "ダウンロード", "インストール"],
        1,
        "ブート（起動）は、電源投入から操作可能状態になるまでの一連の処理です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "マウスの右ボタンをクリックすることを何と言いますか？",
        ["左クリック", "右クリック", "ダブルクリック", "ドラッグ"],
        1,
        "マウスの右ボタンを押すことを右クリックと言います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アイコンを素早く2回クリックすることを何と言いますか？",
        ["シングルクリック", "右クリック", "ダブルクリック", "トリプルクリック"],
        2,
        "アイコンを素早く2回クリックすることをダブルクリックと言います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイルやフォルダを別の場所に移動する操作を何と言いますか？",
        ["コピー", "ドラッグ", "クリック", "削除"],
        1,
        "マウスでファイルを押したまま移動することをドラッグと言います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Windowsでファイルを削除した時に一時的に保存される場所はどこですか？",
        ["デスクトップ", "ごみ箱", "マイドキュメント", "プログラムファイル"],
        1,
        "削除したファイルは一時的にごみ箱に移動され、完全削除する前に復元可能です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キーボードの「Ctrl」キーと「C」キーを同時に押すとどんな操作ができますか？",
        ["切り取り", "コピー", "貼り付け", "元に戻す"],
        1,
        "Ctrl+Cはコピー（複写）のショートカットキーです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キーボードの「Ctrl」キーと「V」キーを同時に押すとどんな操作ができますか？",
        ["切り取り", "コピー", "貼り付け", "元に戻す"],
        2,
        "Ctrl+Vは貼り付け（ペースト）のショートカットキーです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "パソコンの画面に表示される小さな絵のことを何と言いますか？",
        ["ウィンドウ", "アイコン", "メニュー", "ボタン"],
        1,
        "アイコンは、ファイルやプログラムを表す小さな絵や図のことです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "複数のアプリケーションを切り替えるために使うキーの組み合わせはどれですか？",
        ["Ctrl+C", "Ctrl+V", "Alt+Tab", "Ctrl+S"],
        2,
        "Alt+Tabは開いているアプリケーション間を切り替えるショートカットです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイルに名前を付けて保存するショートカットキーはどれですか？",
        ["Ctrl+S", "Ctrl+O", "Ctrl+N", "Ctrl+P"],
        0,
        "Ctrl+Sは保存（Save）のショートカットキーです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の「0」を2進数で表すとどうなりますか？",
        ["0", "1", "10", "11"],
        0,
        "0は10進数でも2進数でも0です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の「1」を2進数で表すとどうなりますか？",
        ["0", "1", "10", "11"],
        1,
        "1は10進数でも2進数でも1です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の「2」を2進数で表すとどうなりますか？",
        ["2", "10", "11", "100"],
        1,
        "10進数の2は2進数では10になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の「3」を2進数で表すとどうなりますか？",
        ["3", "10", "11", "100"],
        2,
        "10進数の3は2進数では11になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の「4」を2進数で表すとどうなりますか？",
        ["11", "100", "101", "110"],
        1,
        "10進数の4は2進数では100になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数の「10」を10進数で表すとどうなりますか？",
        ["1", "2", "3", "4"],
        1,
        "2進数の10は10進数では2になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数の「11」を10進数で表すとどうなりますか？",
        ["2", "3", "4", "5"],
        1,
        "2進数の11は10進数では3になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数の「100」を10進数で表すとどうなりますか？",
        ["3", "4", "5", "6"],
        1,
        "2進数の100は10進数では4になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数で使用される文字でないものはどれですか？",
        ["A", "F", "G", "E"],
        2,
        "16進数では0-9とA-Fを使用します。Gは使用しません。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数の「A」は10進数でいくつですか？",
        ["9", "10", "11", "12"],
        1,
        "16進数のAは10進数の10を表します。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "インターネットに接続するために必要な機器はどれですか？",
        ["プリンタ", "モデム", "スピーカー", "マイク"],
        1,
        "モデムは電話回線やケーブルを通じてインターネットに接続するための機器です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "電子メールを送受信するために必要なものはどれですか？",
        ["メールアドレス", "電話番号", "住所", "銀行口座"],
        0,
        "電子メールを送受信するには、個人を識別するメールアドレスが必要です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "他人にパスワードを教えることについて正しいものはどれですか？",
        ["家族になら教えても良い", "友人になら教えても良い", "誰にも教えてはいけない", "先生になら教えても良い"],
        2,
        "パスワードは個人の秘密情報であり、誰にも教えてはいけません。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "安全なパスワードの条件として正しくないものはどれですか？",
        ["8文字以上", "英数字混在", "誕生日を使用", "記号を含む"],
        2,
        "誕生日などの推測しやすい情報をパスワードに使用するのは危険です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "怪しいメールの添付ファイルについて正しい対応はどれですか？",
        ["すぐに開く", "開かずに削除", "友人に転送", "印刷する"],
        1,
        "怪しいメールの添付ファイルは開かずに削除するのが安全です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "Wi-Fiを使用する際の注意点として正しいものはどれですか？",
        ["パスワードなしでも接続して良い", "公共Wi-Fiで重要な情報を送らない", "速度が速ければ何でも良い", "誰でも接続できる方が便利"],
        1,
        "公共Wi-Fiでは個人情報やパスワードなどの重要な情報を送信しないよう注意が必要です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "フィッシング詐欺の特徴として正しいものはどれですか？",
        ["正規サイトと同じ見た目", "必ず電話がかかってくる", "商品が安く買える", "友人からの紹介"],
        0,
        "フィッシング詐欺は正規サイトそっくりの偽サイトでIDやパスワードを盗む手口です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "ウイルス対策ソフトの役割として正しいものはどれですか？",
        ["パソコンを高速化する", "悪意あるプログラムから守る", "インターネットを速くする", "ファイルを圧縮する"],
        1,
        "ウイルス対策ソフトはコンピュータウイルスなどの悪意あるプログラムから守る役割があります。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "個人情報を守るために避けるべき行動はどれですか？",
        ["パスワードを定期的に変更", "SNSに住所を投稿", "ウイルス対策ソフト使用", "怪しいサイトを避ける"],
        1,
        "SNSに住所などの個人情報を投稿するのは危険です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "安全にインターネットを利用するための基本的な心構えはどれですか？",
        ["何でも信じる", "注意深く行動する", "速さを優先する", "面倒な設定は避ける"],
        1,
        "インターネット利用では、セキュリティを意識して注意深く行動することが重要です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページを作るために使用する基本的な言語はどれですか？",
        ["Word", "Excel", "HTML", "PowerPoint"],
        2,
        "HTMLはWebページの構造を記述するためのマークアップ言語です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで文章を太字にするタグはどれですか？",
        ["<i>", "<b>", "<u>", "<s>"],
        1,
        "<b>タグは文字を太字（bold）にするために使用します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで改行を表すタグはどれですか？",
        ["<br>", "<hr>", "<p>", "<div>"],
        0,
        "<br>タグは改行（break）を表します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで見出しを表すタグはどれですか？",
        ["<title>", "<head>", "<h1>", "<header>"],
        2,
        "<h1>から<h6>まで、見出しの大きさに応じて使い分けます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLでリストを作成するタグはどれですか？",
        ["<list>", "<ul>", "<table>", "<form>"],
        1,
        "<ul>は番号なしリスト、<ol>は番号付きリストを作成します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページの見た目を設定する言語はどれですか？",
        ["HTML", "CSS", "JavaScript", "PHP"],
        1,
        "CSS（Cascading Style Sheets）はWebページの見た目やレイアウトを設定する言語です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページに動きをつけるために使用される言語はどれですか？",
        ["HTML", "CSS", "JavaScript", "XML"],
        2,
        "JavaScriptはWebページに動的な機能や interactivity を追加するプログラミング言語です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webブラウザの役割として正しいものはどれですか？",
        ["メールを送信する", "HTMLを表示する", "ファイルを圧縮する", "音楽を作成する"],
        1,
        "WebブラウザはHTMLで記述されたWebページを解釈して表示する役割があります。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "URLの「http://」の部分を何と言いますか？",
        ["ドメイン名", "プロトコル", "パスワード", "ファイル名"],
        1,
        "http://やhttps://の部分はプロトコル（通信規約）を表します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webサイトのトップページのファイル名として一般的なものはどれですか？",
        ["top.html", "index.html", "main.html", "home.html"],
        1,
        "index.htmlは多くのWebサーバーでデフォルトのトップページファイル名として使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムの命令を順番に実行することを何と言いますか？",
        ["分岐", "繰り返し", "順次処理", "関数"],
        2,
        "順次処理は、プログラムの命令を上から下へ順番に実行することです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "条件によって処理を分けることを何と言いますか？",
        ["順次処理", "分岐処理", "繰り返し処理", "関数処理"],
        1,
        "分岐処理は、条件によって異なる処理を実行することです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "同じ処理を何度も実行することを何と言いますか？",
        ["順次処理", "分岐処理", "繰り返し処理", "終了処理"],
        2,
        "繰り返し処理（ループ）は、条件を満たす間、同じ処理を繰り返し実行することです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムで数値や文字列を一時的に記憶するものを何と言いますか？",
        ["関数", "変数", "定数", "配列"],
        1,
        "変数は、プログラム実行中にデータを一時的に格納するための領域です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "複数のデータをまとめて管理するデータ構造を何と言いますか？",
        ["変数", "定数", "配列", "関数"],
        2,
        "配列は、同じ種類のデータを複数個まとめて管理するデータ構造です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "処理をまとめて名前を付けたものを何と言いますか？",
        ["変数", "配列", "関数", "定数"],
        2,
        "関数は、一連の処理をまとめて名前を付け、繰り返し利用できるようにしたものです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムの間違いを何と言いますか？",
        ["エラー", "バグ", "デバッグ", "コンパイル"],
        1,
        "バグは、プログラムの論理的な間違いや不具合のことです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムのバグを見つけて修正することを何と言いますか？",
        ["エラー", "バグ", "デバッグ", "コンパイル"],
        2,
        "デバッグは、プログラムのバグを発見し、修正する作業のことです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミング言語として正しいものはどれですか？",
        ["Word", "Python", "Excel", "PowerPoint"],
        1,
        "Pythonは人気の高いプログラミング言語の一つです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "Scratchの特徴として正しいものはどれですか？",
        ["文字だけで作る", "ブロックを組み合わせる", "計算だけができる", "大人専用"],
        1,
        "Scratchは、プログラミングブロックを組み合わせて視覚的にプログラムを作成できる教育用言語です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "大量のデータを効率的に管理するシステムを何と言いますか？",
        ["ワープロ", "表計算", "データベース", "プレゼンテーション"],
        2,
        "データベースは、大量のデータを効率的に格納・管理・検索するためのシステムです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースで、データを表形式で管理する単位を何と言いますか？",
        ["ファイル", "テーブル", "フォルダ", "ウィンドウ"],
        1,
        "テーブルは、データベースでデータを行と列の表形式で管理する基本単位です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの行（横の並び）のことを何と言いますか？",
        ["フィールド", "レコード", "カラム", "セル"],
        1,
        "レコードは、データベースの1行分のデータで、1つの項目に関する情報をまとめたものです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの列（縦の並び）のことを何と言いますか？",
        ["フィールド", "レコード", "ロウ", "テーブル"],
        0,
        "フィールド（項目）は、データベースの1列分のデータで、データの種類を表します。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースからデータを取り出すことを何と言いますか？",
        ["入力", "検索", "削除", "保存"],
        1,
        "検索（クエリ）は、データベースから条件に合うデータを取り出す操作です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースでデータを操作するための言語を何と言いますか？",
        ["HTML", "CSS", "SQL", "XML"],
        2,
        "SQL（Structured Query Language）は、データベースを操作するための専用言語です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースで同じデータが重複して保存されることの問題を何と言いますか？",
        ["バックアップ", "冗長性", "整合性", "セキュリティ"],
        1,
        "データの冗長性は、同じデータが複数箇所に保存され、管理が困難になる問題です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースのデータが矛盾なく正しく保たれることを何と言いますか？",
        ["冗長性", "整合性", "冗長性", "効率性"],
        1,
        "データの整合性は、データベース内のデータが論理的に矛盾なく正しい状態を保つことです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースへの不正アクセスを防ぐ仕組みを何と言いますか？",
        ["バックアップ", "セキュリティ", "圧縮", "暗号化"],
        1,
        "データベースセキュリティは、不正アクセスやデータ漏洩を防ぐための仕組みです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データの喪失に備えて複製を作成することを何と言いますか？",
        ["セキュリティ", "バックアップ", "圧縮", "検索"],
        1,
        "バックアップは、データの喪失に備えて定期的にデータの複製を作成することです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "人工知能の略称として正しいものはどれですか？",
        ["AI", "IT", "IoT", "VR"],
        0,
        "AI（Artificial Intelligence）は人工知能の略称です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータが人間のように学習する技術を何と言いますか？",
        ["データベース", "機械学習", "プログラミング", "ネットワーク"],
        1,
        "機械学習は、コンピュータがデータから自動的にパターンを学習する技術です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "人工知能が人間と会話する技術を何と言いますか？",
        ["音声認識", "チャットボット", "画像認識", "翻訳"],
        1,
        "チャットボットは、人工知能を使って人間と自動的に会話する技術です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータが画像の内容を理解する技術を何と言いますか？",
        ["音声認識", "画像認識", "文字認識", "顔認識"],
        1,
        "画像認識は、コンピュータが画像の内容を解析し、物体や場面を識別する技術です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータが人間の音声を文字に変換する技術を何と言いますか？",
        ["音声認識", "音声合成", "翻訳", "録音"],
        0,
        "音声認識は、人間の音声をコンピュータが理解し、文字データに変換する技術です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIが大量のデータから学習するために必要なものはどれですか？",
        ["少量のデータ", "ビッグデータ", "人間の判断", "計算機"],
        1,
        "機械学習では、大量のデータ（ビッグデータ）から有用なパターンを学習します。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "自動運転車に使われている主な技術はどれですか？",
        ["インターネット", "人工知能", "電子メール", "文書作成"],
        1,
        "自動運転車は、センサーデータを人工知能で処理して運転判断を行います。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "翻訳アプリが異なる言語を自動翻訳できる技術の基盤は何ですか？",
        ["辞書検索", "人工知能", "電話", "ファックス"],
        1,
        "現代の翻訳アプリは、機械学習を使った人工知能技術で高精度な翻訳を実現しています。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートスピーカーが音声コマンドに応答できる技術は何ですか？",
        ["録音機能", "音声認識AI", "スピーカー", "マイク"],
        1,
        "スマートスピーカーは音声認識AIにより音声コマンドを理解し、適切に応答します。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIが人間の顔を識別する技術を何と言いますか？",
        ["指紋認証", "顔認識", "音声認識", "虹彩認証"],
        1,
        "顔認識技術は、AIが顔の特徴を分析して個人を識別する生体認証技術です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "インターネット上でソフトウェアやデータを利用するサービスを何と言いますか？",
        ["ダウンロード", "クラウドサービス", "インストール", "オフライン"],
        1,
        "クラウドサービスは、インターネット経由でソフトウェアやデータストレージを提供するサービスです。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "身の回りのモノがインターネットにつながる技術を何と言いますか？",
        ["SNS", "IoT", "GPS", "Wi-Fi"],
        1,
        "IoT（Internet of Things）は、様々な物がインターネットに接続される技術です。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートフォンでファイルを保存できるクラウドサービスの例はどれですか？",
        ["Google Drive", "メモ帳", "電卓", "カメラ"],
        0,
        "Google Driveは、ファイルをクラウド上に保存・共有できるサービスです。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoTデバイスの例として正しくないものはどれですか？",
        ["スマート電球", "スマートウォッチ", "ネット接続冷蔵庫", "従来の電卓"],
        3,
        "従来の電卓はインターネットに接続できないため、IoTデバイスではありません。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドストレージの利点として正しいものはどれですか？",
        ["インターネット不要", "どこからでもアクセス可能", "無料でデータ無制限", "ウイルス感染しない"],
        1,
        "クラウドストレージは、インターネットがあれば場所を問わずデータにアクセスできます。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートホームで自動制御できるものとして正しくないものはどれですか？",
        ["照明のオンオフ", "エアコンの温度", "テレビのチャンネル", "人間の感情"],
        3,
        "スマートホームは機器の制御はできますが、人間の感情は制御できません。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドサービスを利用する際に必要なものはどれですか？",
        ["専用ソフト", "高性能PC", "インターネット接続", "プリンタ"],
        2,
        "クラウドサービスを利用するには、インターネット接続が必要です。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "GPS機能を使ったサービスの例として正しいものはどれですか？",
        ["メール送信", "地図ナビゲーション", "音楽再生", "文書作成"],
        1,
        "GPS（全地球測位システム）は現在位置を特定し、地図ナビゲーションサービスで活用されます。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートウォッチで測定できるデータとして正しくないものはどれですか？",
        ["心拍数", "歩数", "睡眠時間", "血液型"],
        3,
        "スマートウォッチは活動量や生体情報は測定できますが、血液型は測定できません。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoT機器のセキュリティで注意すべき点として正しいものはどれですか？",
        ["パスワード設定不要", "デフォルト設定のまま使用", "定期的なアップデート", "だれでも接続可能にする"],
        2,
        "IoT機器のセキュリティを保つため、定期的なソフトウェアアップデートが重要です。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアを作る過程全体を何と言いますか？",
        ["プログラミング", "ソフトウェア開発", "デザイン", "テスト"],
        1,
        "ソフトウェア開発は、要求分析から設計、実装、テスト、保守まで全ての過程を含みます。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェア開発で最初に行うべき作業はどれですか？",
        ["プログラミング", "テスト", "要求分析", "デバッグ"],
        2,
        "要求分析は、どのようなソフトウェアが必要かを明確にする最初の重要な作業です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムが正しく動作するかを確認する作業を何と言いますか？",
        ["設計", "テスト", "分析", "計画"],
        1,
        "テストは、プログラムが期待通りに動作することを確認する重要な工程です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "チームでソフトウェア開発する際に重要なことはどれですか？",
        ["個人で作業する", "コミュニケーション", "速さだけを重視", "ドキュメントを作らない"],
        1,
        "チーム開発では、メンバー間のコミュニケーションが成功の鍵となります。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアの設計書を作成する目的として正しいものはどれですか？",
        ["プログラムを遅くする", "作業を複雑にする", "開発チームで情報共有", "コストを増加させる"],
        2,
        "設計書は、開発チーム全体でソフトウェアの構造と機能を共有するために作成します。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアの品質を保つために重要でないものはどれですか？",
        ["テストの実施", "コードレビュー", "ドキュメント作成", "開発速度のみ重視"],
        3,
        "開発速度のみを重視すると、品質が低下する可能性があります。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ユーザーのニーズに合わせてソフトウェアを改良することを何と言いますか？",
        ["保守", "削除", "複製", "圧縮"],
        0,
        "ソフトウェア保守は、リリース後のバグ修正や機能改善を行う継続的な作業です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムのバージョンを管理するシステムを何と言いますか？",
        ["バックアップ", "バージョン管理", "ファイル管理", "セキュリティ"],
        1,
        "バージョン管理システムは、プログラムの変更履歴を記録し、チーム開発を支援します。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェア開発でよく使われる「アジャイル」の特徴はどれですか？",
        ["完璧な計画を最初に立てる", "短い期間で繰り返し改善", "テストは最後に行う", "ドキュメントが最重要"],
        1,
        "アジャイル開発は、短いスプリントで繰り返し開発し、柔軟に改善していく手法です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "他の人が書いたプログラムを確認することを何と言いますか？",
        ["コピー", "コードレビュー", "バックアップ", "コンパイル"],
        1,
        "コードレビューは、品質向上とバグ発見を目的として他者のコードを確認する作業です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタルカメラで撮影した写真のファイル形式として一般的なものはどれですか？",
        ["MP3", "JPEG", "MP4", "PDF"],
        1,
        "JPEG（.jpg）は、写真に適した圧縮率の高い画像ファイル形式です。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "音楽ファイルの形式として一般的なものはどれですか？",
        ["JPEG", "PNG", "MP3", "GIF"],
        2,
        "MP3は、音楽データを圧縮した音声ファイル形式として広く普及しています。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画ファイルの形式として一般的なものはどれですか？",
        ["JPEG", "MP3", "MP4", "TXT"],
        2,
        "MP4は、映像と音声を含む動画ファイル形式として広く使用されています。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像の細かさを表す言葉はどれですか？",
        ["サイズ", "解像度", "容量", "色数"],
        1,
        "解像度は、画像の細かさや鮮明さを表す指標で、通常ピクセル数で表されます。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "透明な背景を保存できる画像形式はどれですか？",
        ["JPEG", "PNG", "BMP", "TXT"],
        1,
        "PNG形式は透明度（アルファチャンネル）をサポートし、背景を透明にできます。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像や動画を編集するソフトウェアの例として正しいものはどれですか？",
        ["Word", "Excel", "Photoshop", "メモ帳"],
        2,
        "Photoshopは、プロフェッショナルな画像編集ソフトウェアとして広く使用されています。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画の品質に影響する要素として正しくないものはどれですか？",
        ["解像度", "フレームレート", "ビットレート", "ファイル名"],
        3,
        "ファイル名は動画の品質には影響しません。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル画像を構成する最小単位を何と言いますか？",
        ["ピクセル", "バイト", "文字", "ページ"],
        0,
        "ピクセルは、デジタル画像を構成する最小の点（画素）のことです。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "音声を文字に変換する技術を何と言いますか？",
        ["音声認識", "音声合成", "録音", "再生"],
        0,
        "音声認識技術は、人間の音声をコンピュータが認識し、文字データに変換します。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータが人工的に音声を作り出す技術を何と言いますか？",
        ["音声認識", "音声合成", "録音", "エコー"],
        1,
        "音声合成技術は、テキストデータから人工的に音声を生成する技術です。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "会社で売上データを管理するのに適したソフトウェアはどれですか？",
        ["ゲーム", "Excel", "音楽プレイヤー", "カメラアプリ"],
        1,
        "Excel等の表計算ソフトは、数値データの管理や分析に適しています。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "プレゼンテーションを作成するのに適したソフトウェアはどれですか？",
        ["PowerPoint", "メモ帳", "電卓", "音楽プレイヤー"],
        0,
        "PowerPointは、スライドを使ったプレゼンテーション作成に適したソフトウェアです。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "文書を作成するのに適したソフトウェアはどれですか？",
        ["Word", "Photoshop", "音楽編集ソフト", "ゲーム"],
        0,
        "Microsoft Wordは、文書作成に特化したワードプロセッサソフトウェアです。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "インターネットで学習できるシステムを何と言いますか？",
        ["e-learning", "e-mail", "e-book", "e-commerce"],
        0,
        "e-learningは、インターネットを活用した電子学習システムです。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "企業のデジタル変革を何と言いますか？",
        ["DX", "AI", "IoT", "SNS"],
        0,
        "DX（Digital Transformation）は、企業がデジタル技術を活用して変革することです。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "在宅勤務のことを何と言いますか？",
        ["アウトソーシング", "テレワーク", "インターンシップ", "フリーランス"],
        1,
        "テレワークは、ICTを活用して場所にとらわれない働き方のことです。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビデオ会議システムの利点として正しくないものはどれですか？",
        ["移動時間の節約", "コスト削減", "場所の制約なし", "必ず対面より効果的"],
        3,
        "ビデオ会議は便利ですが、全ての場面で対面より効果的とは限りません。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "オンラインショッピングのことを何と言いますか？",
        ["e-mail", "e-learning", "e-commerce", "e-book"],
        2,
        "e-commerce（電子商取引）は、インターネット上での商品やサービスの売買です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "SNSの利用で注意すべき点として正しいものはどれですか？",
        ["個人情報を詳細に公開", "何でも投稿して良い", "プライバシー設定を確認", "全員と友達になる"],
        2,
        "SNSでは、プライバシー設定を適切に行い、個人情報の公開範囲を制限することが重要です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウドを活用した共同作業の利点として正しいものはどれですか？",
        ["インターネット不要", "リアルタイム共有", "データ同期不要", "オフライン専用"],
        1,
        "クラウドサービスにより、複数人でリアルタイムにファイルを共有・編集できます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル通貨の一種として知られるものはどれですか？",
        ["電子マネー", "ビットコイン", "クレジットカード", "現金"],
        1,
        "ビットコインは、ブロックチェーン技術を使った代表的な暗号通貨（仮想通貨）です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Basic
    ),
    new Question(
        "仮想現実技術の略称として正しいものはどれですか？",
        ["AI", "VR", "IoT", "GPS"],
        1,
        "VR（Virtual Reality）は、コンピュータで作られた仮想的な世界を体験する技術です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Basic
    ),
    new Question(
        "現実世界にデジタル情報を重ね合わせる技術を何と言いますか？",
        ["VR", "AR", "AI", "IoT"],
        1,
        "AR（Augmented Reality）は、現実世界にデジタル情報を重ねて表示する拡張現実技術です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Basic
    ),
    new Question(
        "5G通信の特徴として正しくないものはどれですか？",
        ["高速通信", "低遅延", "多接続", "低セキュリティ"],
        3,
        "5Gは高速・低遅延・多接続が特徴で、セキュリティが低いわけではありません。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "NFTとは何の略ですか？",
        ["New File Type", "Non-Fungible Token", "Network File Transfer", "Next Generation Tech"],
        1,
        "NFT（Non-Fungible Token）は、デジタルアセットの唯一性を証明する技術です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Advanced
    ),
    new Question(
        "メタバースの特徴として正しいものはどれですか？",
        ["2次元の世界", "仮想3D空間", "現実世界のみ", "文字だけの世界"],
        1,
        "メタバースは、人々が活動できる仮想的な3次元空間です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "量子コンピュータの特徴として期待されるものはどれですか？",
        ["消費電力の増加", "処理速度の大幅向上", "サイズの巨大化", "価格の高騰"],
        1,
        "量子コンピュータは、特定の計算において従来のコンピュータを大幅に上回る処理速度が期待されています。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Advanced
    ),
    new Question(
        "自動運転技術のレベルで「完全自動運転」はレベルいくつですか？",
        ["レベル3", "レベル4", "レベル5", "レベル6"],
        2,
        "自動運転レベル5は、あらゆる条件下で人間の介入なしに自動運転する完全自動運転です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ロボットが人間と協働することを何と言いますか？",
        ["人工知能", "人間協働ロボット", "産業ロボット", "家庭用ロボット"],
        1,
        "協働ロボット（コボット）は、人間と同じ空間で安全に協力して作業するロボットです。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ドローンの活用分野として正しくないものはどれですか？",
        ["空撮", "配送", "農業", "深海探査"],
        3,
        "ドローンは空中を飛行する機器なので、深海探査には使用できません。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLの正式名称は何ですか？",
        ["High Text Markup Language", "HyperText Markup Language", "Home Tool Markup Language", "Hard Text Making Language"],
        1,
        "HTMLはHyperText Markup Languageの略で、Webページを作成するマークアップ言語です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLファイルの拡張子として正しいものはどれですか？",
        [".txt", ".html", ".doc", ".pdf"],
        1,
        "HTMLファイルの拡張子は.htmlまたは.htmです。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLの基本構造で、ページの見出しを定義するタグはどれですか？",
        ["<title>", "<head>", "<h1>", "<header>"],
        2,
        "<h1>タグは最上位の見出しを定義します。<h1>から<h6>まで6段階の見出しがあります。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで段落を作成するタグはどれですか？",
        ["<p>", "<br>", "<div>", "<span>"],
        0,
        "<p>タグは段落（paragraph）を作成するために使用します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで画像を表示するタグはどれですか？",
        ["<picture>", "<image>", "<img>", "<photo>"],
        2,
        "<img>タグは画像を表示するために使用します。src属性で画像ファイルのパスを指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLでリンクを作成するタグはどれですか？",
        ["<link>", "<a>", "<url>", "<href>"],
        1,
        "<a>タグ（anchor）はリンクを作成します。href属性でリンク先のURLを指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで箇条書きリストを作成するタグはどれですか？",
        ["<list>", "<ul>", "<ol>", "<li>"],
        1,
        "<ul>（unordered list）は順序なしの箇条書きリストを作成します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLで番号付きリストを作成するタグはどれですか？",
        ["<nl>", "<ol>", "<ul>", "<num>"],
        1,
        "<ol>（ordered list）は番号付きの順序ありリストを作成します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLでテーブル（表）を作成するタグはどれですか？",
        ["<table>", "<tab>", "<grid>", "<sheet>"],
        0,
        "<table>タグは表を作成するために使用します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLでテーブルの行を定義するタグはどれですか？",
        ["<row>", "<tr>", "<line>", "<td>"],
        1,
        "<tr>（table row）タグはテーブルの行を定義します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSの正式名称は何ですか？",
        ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Common Style Structure"],
        1,
        "CSSはCascading Style Sheetsの略で、Webページのスタイルを定義する言語です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSファイルの拡張子として正しいものはどれですか？",
        [".style", ".css", ".design", ".web"],
        1,
        "CSSファイルの拡張子は.cssです。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで文字の色を変更するプロパティはどれですか？",
        ["font-color", "text-color", "color", "char-color"],
        2,
        "colorプロパティで文字の色を指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで背景色を設定するプロパティはどれですか？",
        ["background-color", "bg-color", "back-color", "color-background"],
        0,
        "background-colorプロパティで背景色を設定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで文字のサイズを指定するプロパティはどれですか？",
        ["text-size", "font-size", "char-size", "size"],
        1,
        "font-sizeプロパティで文字のサイズを指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSでフォント（書体）を指定するプロパティはどれですか？",
        ["font-type", "font-family", "text-font", "typeface"],
        1,
        "font-familyプロパティでフォントの種類を指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで文字を太字にするプロパティはどれですか？",
        ["font-bold", "text-bold", "font-weight", "bold"],
        2,
        "font-weightプロパティで文字の太さを指定します。boldまたは700で太字になります。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで要素の横幅を指定するプロパティはどれですか？",
        ["size", "width", "wide", "horizontal"],
        1,
        "widthプロパティで要素の横幅を指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで要素の高さを指定するプロパティはどれですか？",
        ["height", "tall", "vertical", "long"],
        0,
        "heightプロパティで要素の高さを指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで余白（マージン）を設定するプロパティはどれですか？",
        ["spacing", "margin", "padding", "gap"],
        1,
        "marginプロパティで要素の外側の余白を設定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "JavaScriptでWebページに文字を表示する基本的な命令はどれですか？",
        ["print()", "write()", "document.write()", "show()"],
        2,
        "document.write()はWebページに直接文字を書き込む基本的な命令です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "JavaScriptで警告ダイアログを表示する命令はどれですか？",
        ["alert()", "warning()", "message()", "popup()"],
        0,
        "alert()関数は警告ダイアログボックスを表示します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "JavaScriptで変数を宣言するキーワードはどれですか？",
        ["variable", "var", "value", "declare"],
        1,
        "varキーワードで変数を宣言します。最近では let や const も使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "JavaScriptで関数を定義するキーワードはどれですか？",
        ["def", "function", "method", "proc"],
        1,
        "functionキーワードで関数を定義します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "JavaScriptでコメント（注釈）を書く記号はどれですか？",
        ["/* */", "// ", "# ", "<!-- -->"],
        1,
        "//で一行コメント、/* */で複数行コメントを書きます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページのレイアウトを作成する際、最も基本的な要素はどれですか？",
        ["画像", "テキスト", "リンク", "構造"],
        3,
        "Webページは情報の構造を明確にすることが最も重要です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webデザインにおいて、ユーザーが使いやすいデザインのことを何と言いますか？",
        ["ユーザビリティ", "アクセシビリティ", "レスポンシブ", "インタラクティブ"],
        0,
        "ユーザビリティは使いやすさを表す重要な概念です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページの色を選ぶ際に考慮すべき要素として最も重要なのはどれですか？",
        ["個人の好み", "流行の色", "見やすさ・読みやすさ", "競合サイトとの差別化"],
        2,
        "色は見やすさ・読みやすさを最優先に考える必要があります。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webサイトのナビゲーション（案内）で最も重要な要素はどれですか？",
        ["デザインの美しさ", "分かりやすさ", "アニメーション効果", "色の豊富さ"],
        1,
        "ナビゲーションは直感的で分かりやすいことが最も重要です。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートフォンやタブレットに対応したWebデザインを何と言いますか？",
        ["モバイルデザイン", "レスポンシブデザイン", "アダプティブデザイン", "フレキシブルデザイン"],
        1,
        "レスポンシブデザインは画面サイズに応じて自動的にレイアウトが調整されるデザインです。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンピュータの5大機能に含まれないものはどれですか？",
        ["入力", "演算", "制御", "通信"],
        3,
        "コンピュータの5大機能は入力、演算、制御、記憶、出力です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "キーボードの「Ctrl」キーは何の略ですか？",
        ["Control", "Central", "Computer", "Create"],
        0,
        "Ctrlキーは「Control（制御）」の略です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "マウスの右クリックで表示されるメニューを何と言いますか？",
        ["メインメニュー", "コンテキストメニュー", "システムメニュー", "ポップアップメニュー"],
        1,
        "コンテキストメニューは状況に応じて表示される右クリックメニューです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイルをコピーするショートカットキーはどれですか（Windows）？",
        ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"],
        0,
        "Ctrl+Cでコピー、Ctrl+Vで貼り付けです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイルを削除せずに別の場所に移動させることを何と言いますか？",
        ["コピー", "カット", "ペースト", "移動"],
        3,
        "ファイルの移動は元の場所からファイルを削除せずに別の場所に配置することです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータの処理能力を表す単位でないものはどれですか？",
        ["Hz（ヘルツ）", "MIPS", "FLOPS", "Byte（バイト）"],
        3,
        "Byteは容量の単位で、処理能力の単位ではありません。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータのメモリ（RAM）の主な役割は何ですか？",
        ["長期保存", "一時的なデータ保存", "プログラムの永続保存", "バックアップ"],
        1,
        "RAM（メモリ）は作業中のデータやプログラムを一時的に保存します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハードディスクドライブ（HDD）の特徴として正しいものはどれですか？",
        ["電源を切ってもデータが残る", "揮発性メモリ", "一時保存のみ", "高速だが容量が小さい"],
        0,
        "HDDは不揮発性記憶装置で、電源を切ってもデータが保存されます。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SSD（Solid State Drive）のHDDに対する利点は何ですか？",
        ["価格が安い", "容量が大きい", "読み書きが高速", "寿命が長い"],
        2,
        "SSDは機械的な駆動部分がないため、HDDより読み書きが高速です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CPUの役割として正しいものはどれですか？",
        ["データの保存", "計算・制御", "データの入力", "結果の出力"],
        1,
        "CPU（Central Processing Unit）はコンピュータの中央演算処理装置で、計算と制御を行います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムとは何ですか？",
        ["コンピュータの部品", "コンピュータへの命令の集まり", "データファイル", "ソフトウェアの一部"],
        1,
        "プログラムはコンピュータに対する具体的な命令（処理手順）の集まりです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムを作成する作業を何と言いますか？",
        ["コーディング", "タイピング", "データ入力", "文書作成"],
        0,
        "プログラムを作成する作業をコーディングやプログラミングと言います。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラム内で値を保存する「箱」のような仕組みを何と言いますか？",
        ["関数", "変数", "定数", "配列"],
        1,
        "変数はプログラム内でデータを一時的に保存する仕組みです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムで同じ処理を繰り返し実行することを何と言いますか？",
        ["分岐", "ループ", "関数", "代入"],
        1,
        "ループ（繰り返し）は同じ処理を複数回実行する制御構造です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムで条件によって処理を変えることを何と言いますか？",
        ["ループ", "分岐", "代入", "計算"],
        1,
        "分岐（条件分岐）は条件に応じて異なる処理を実行する制御構造です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムでよく使われる「if」文の役割は何ですか？",
        ["繰り返し処理", "条件判断", "計算処理", "データ入力"],
        1,
        "if文は条件を判断して、真の場合と偽の場合で異なる処理を実行します。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムで「for」文の主な用途は何ですか？",
        ["条件判断", "繰り返し処理", "データ出力", "変数宣言"],
        1,
        "for文は指定した回数だけ処理を繰り返すために使用します。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムのエラー（間違い）を見つけて修正する作業を何と言いますか？",
        ["コンパイル", "デバッグ", "テスト", "実行"],
        1,
        "デバッグはプログラムの不具合（バグ）を発見・修正する作業です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミング言語の「Python」の特徴として正しいものはどれですか？",
        ["習得が困難", "シンプルで読みやすい", "古い言語", "数値計算に不向き"],
        1,
        "Pythonはシンプルで読みやすい文法が特徴的なプログラミング言語です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミング言語の「Java」の特徴として正しいものはどれですか？",
        ["Web専用", "OS依存", "オブジェクト指向", "計算のみ可能"],
        2,
        "Javaはオブジェクト指向プログラミングが可能な汎用プログラミング言語です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースとは何ですか？",
        ["プログラム", "データを整理して保存する仕組み", "コンピュータの部品", "インターネット"],
        1,
        "データベースは大量のデータを効率的に整理・保存・検索できる仕組みです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースでデータを格納する基本単位を何と言いますか？",
        ["ファイル", "テーブル", "フォルダ", "ページ"],
        1,
        "テーブルは行と列で構成される表形式のデータ格納単位です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースのテーブルにおいて、横の並びを何と言いますか？",
        ["列（カラム）", "行（レコード）", "セル", "フィールド"],
        1,
        "行（レコード）は一つのデータの集まりを表す横の並びです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースのテーブルにおいて、縦の並びを何と言いますか？",
        ["行（レコード）", "列（カラム）", "セル", "タプル"],
        1,
        "列（カラム）は同じ種類のデータが入る縦の並びです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースからデータを取り出すことを何と言いますか？",
        ["挿入", "検索（クエリ）", "削除", "更新"],
        1,
        "検索（クエリ）はデータベースから条件に合うデータを取り出す操作です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの操作言語として最も一般的なものはどれですか？",
        ["HTML", "SQL", "Java", "Python"],
        1,
        "SQL（Structured Query Language）はデータベース操作の標準言語です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "SQLで「SELECT」文の役割は何ですか？",
        ["データの削除", "データの検索", "データの挿入", "データの更新"],
        1,
        "SELECT文はテーブルからデータを検索・取得するために使用します。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "SQLで新しいデータを追加する文はどれですか？",
        ["INSERT", "UPDATE", "DELETE", "CREATE"],
        0,
        "INSERT文は新しいデータをテーブルに挿入します。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースで各レコードを一意に識別するためのキーを何と言いますか？",
        ["外部キー", "主キー", "候補キー", "複合キー"],
        1,
        "主キー（プライマリキー）は各レコードを一意に識別する重要な要素です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "リレーショナルデータベースの「リレーション」とは何を意味しますか？",
        ["関係性", "計算", "記憶", "表示"],
        0,
        "リレーション（関係）は複数のテーブル間のデータの関連性を表します。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータ同士をつなぐ仕組みを何と言いますか？",
        ["インターネット", "ネットワーク", "プロトコル", "サーバー"],
        1,
        "ネットワークは複数のコンピュータを接続してデータをやり取りする仕組みです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "インターネットで情報をやり取りする際の住所にあたるものは何ですか？",
        ["MAC アドレス", "IP アドレス", "URL", "ドメイン名"],
        1,
        "IPアドレスはインターネット上でコンピュータを識別する番号です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webサイトの住所を表すものはどれですか？",
        ["IP アドレス", "MAC アドレス", "URL", "ポート番号"],
        2,
        "URL（Uniform Resource Locator）はWebページの所在地を示すアドレスです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "電子メールを送受信するサーバーの種類でないものはどれですか？",
        ["SMTP サーバー", "POP3 サーバー", "IMAP サーバー", "HTTP サーバー"],
        3,
        "HTTPサーバーはWebページを配信するサーバーで、メール送受信には使用しません。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "無線LANの規格として正しいものはどれですか？",
        ["Bluetooth", "Wi-Fi", "NFC", "GPS"],
        1,
        "Wi-Fiは無線LANの代表的な規格です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "インターネット上でデータを安全にやり取りするための技術はどれですか？",
        ["圧縮", "暗号化", "解凍", "キャッシュ"],
        1,
        "暗号化は第三者にデータを読み取られないようにする重要な技術です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータウイルス対策として最も基本的なものはどれですか？",
        ["ウイルス対策ソフトの導入", "インターネット接続の禁止", "メール使用の禁止", "ファイル共有の禁止"],
        0,
        "ウイルス対策ソフトの導入と定期的な更新が基本的な対策です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "不正アクセスを防ぐためのネットワーク機器はどれですか？",
        ["ルーター", "ハブ", "ファイアウォール", "モデム"],
        2,
        "ファイアウォールは不正なアクセスを遮断するセキュリティ機器です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "パスワードを設定する際に避けるべきものはどれですか？",
        ["英数字の組み合わせ", "8文字以上", "個人情報（生年月日など）", "定期的な変更"],
        2,
        "生年月日や名前など推測されやすい個人情報をパスワードに使用してはいけません。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "フィッシング詐欺とは何ですか？",
        ["魚釣りゲーム", "偽のサイトで個人情報を盗む詐欺", "コンピュータウイルス", "無線LAN攻撃"],
        1,
        "フィッシング詐欺は偽のWebサイトでIDやパスワードを盗む詐欺手法です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル画像の画質を表す要素はどれですか？",
        ["容量", "解像度", "サイズ", "色"],
        1,
        "解像度（画素数）が高いほど画像は鮮明になります。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像ファイルの形式でないものはどれですか？",
        ["JPEG", "PNG", "GIF", "MP3"],
        3,
        "MP3は音声ファイルの形式で、画像ファイルではありません。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "音声ファイルの形式として正しいものはどれですか？",
        ["JPEG", "WAV", "PNG", "PDF"],
        1,
        "WAVは音声データを保存するファイル形式の一つです。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画ファイルの形式でないものはどれですか？",
        ["MP4", "AVI", "MOV", "DOC"],
        3,
        "DOCは文書ファイルの形式で、動画ファイルではありません。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像を編集・加工するソフトウェアの例はどれですか？",
        ["Excel", "Photoshop", "Word", "PowerPoint"],
        1,
        "Photoshopは画像編集・加工の代表的なソフトウェアです。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画を編集・加工するソフトウェアの例はどれですか？",
        ["Premiere", "Excel", "Notepad", "Calculator"],
        0,
        "Adobe Premiereは動画編集の専門ソフトウェアです。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "音声を録音・編集するソフトウェアの例はどれですか？",
        ["Word", "Audacity", "PowerPoint", "Paint"],
        1,
        "Audacityは音声録音・編集ができる無料ソフトウェアです。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタルカメラで撮影した写真をパソコンに取り込む方法として一般的でないものはどれですか？",
        ["USBケーブル接続", "SDカード", "Wi-Fi転送", "FAX送信"],
        3,
        "FAXは主に文書送信用で、デジタル写真の転送には適していません。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像の色を表現する方法として正しいものはどれですか？",
        ["RGB", "HTTP", "URL", "CPU"],
        0,
        "RGB（Red, Green, Blue）は光の三原色で色を表現する方法です。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画の品質を表す要素として正しいものはどれですか？",
        ["フレームレート", "CPU", "RAM", "HDD"],
        0,
        "フレームレート（1秒間のコマ数）は動画の滑らかさを表します。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "人工知能（AI）とは何ですか？",
        ["コンピュータゲーム", "人間のような知的な処理をするコンピュータ技術", "インターネット", "プログラミング言語"],
        1,
        "AIは人間の知的な活動（学習、推論、判断など）をコンピュータで実現する技術です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習とは何ですか？",
        ["機械の修理", "コンピュータが自動的に学習する技術", "工場の自動化", "ロボット制御"],
        1,
        "機械学習はコンピュータがデータから自動的にパターンを学習する技術です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "音声認識技術の応用例として正しいものはどれですか？",
        ["音楽作成", "スマートスピーカー", "画像編集", "文書作成"],
        1,
        "音声認識技術により、スマートスピーカーは人の話し声を理解できます。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像認識技術の応用例として正しいものはどれですか？",
        ["音楽再生", "顔認証", "文字入力", "計算処理"],
        1,
        "画像認識技術により、顔を識別・認証することができます。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "自然言語処理技術の応用例として正しいものはどれですか？",
        ["翻訳ソフト", "画像編集", "音楽作成", "ゲーム"],
        0,
        "自然言語処理により、異なる言語間での自動翻訳が可能になります。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "チャットボットとは何ですか？",
        ["チャットソフト", "自動で会話するプログラム", "ゲームキャラクター", "SNS"],
        1,
        "チャットボットは人間と自動的に会話するAI技術を使ったプログラムです。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "検索エンジンでAI技術が使われている例はどれですか？",
        ["検索結果の最適化", "広告表示", "ページ作成", "インターネット接続"],
        0,
        "AIにより、ユーザーの意図に合った最適な検索結果を提供できます。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIが得意な作業として正しいものはどれですか？",
        ["感情的な判断", "創造的発想", "パターン認識", "人間関係構築"],
        2,
        "AIは大量のデータからパターンを見つけることが得意です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "現在のAIの限界として正しいものはどれですか？",
        ["計算が遅い", "データが読めない", "人間のような創造性に限界", "電力を使わない"],
        2,
        "現在のAIは人間のような柔軟な創造性や直感的判断には限界があります。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIを安全に活用するために重要なことはどれですか？",
        ["高性能なコンピュータ", "プログラミング技術", "倫理的な配慮", "最新のソフトウェア"],
        2,
        "AI技術は倫理的な観点からの配慮と適切な利用が重要です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアの品質を確保するために重要な工程はどれですか？",
        ["設計", "テスト", "文書化", "すべて重要"],
        3,
        "ソフトウェア開発では設計、実装、テスト、文書化すべてが品質確保に重要です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェア開発の工程を順序立てて進める手法を何と言いますか？",
        ["ウォーターフォール", "アジャイル", "スパイラル", "プロトタイプ"],
        0,
        "ウォーターフォール型は各工程を順序立てて進める代表的な開発手法です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "チームでソフトウェア開発する際に重要なことはどれですか？",
        ["個人の技術力", "コミュニケーション", "競争意識", "個別作業"],
        1,
        "チーム開発では意思疎通とコミュニケーションが最も重要です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアのバージョン管理の目的は何ですか？",
        ["ファイル圧縮", "変更履歴の管理", "実行速度向上", "容量削減"],
        1,
        "バージョン管理により、ソフトウェアの変更履歴を追跡・管理できます。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアの仕様書の役割として正しいものはどれですか？",
        ["プログラムの実行", "要求の明確化", "バグの修正", "性能向上"],
        1,
        "仕様書は何を作るべきかを明確に定義する重要な文書です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアテストの目的として正しいものはどれですか？",
        ["開発期間短縮", "バグの発見", "コスト削減", "機能追加"],
        1,
        "テストの主目的はソフトウェアの不具合（バグ）を発見することです。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ユーザーの要求を分析・整理する工程を何と言いますか？",
        ["設計", "要求分析", "実装", "保守"],
        1,
        "要求分析は利用者のニーズを明確にする最初の重要な工程です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアの保守とは何ですか？",
        ["初期開発", "リリース後の修正・改良", "テスト", "設計"],
        1,
        "保守はソフトウェア完成後のバグ修正や機能改善を行う継続的な作業です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムの可読性を向上させるために重要なことはどれですか？",
        ["短いコード", "適切なコメント", "高速実行", "少ないファイル数"],
        1,
        "適切なコメントや命名により、プログラムを読みやすくすることが重要です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェア開発において「バグ」とは何ですか？",
        ["新機能", "プログラムの不具合", "設計書", "テストデータ"],
        1,
        "バグはプログラムの誤りや不具合のことで、期待通りに動作しない原因です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドコンピューティングの利点として正しいものはどれですか？",
        ["高額な初期費用", "インターネット接続不要", "必要な時に必要な分だけ利用", "個人での管理必須"],
        2,
        "クラウドは必要な時に必要な分だけリソースを利用できる柔軟性が利点です。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoT（Internet of Things）の日本語での意味は何ですか？",
        ["インターネット技術", "情報通信技術", "モノのインターネット", "人工知能"],
        2,
        "IoTはモノのインターネットの意味で、様々な物がネットワークに接続される概念です。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートフォンアプリの多くが利用している技術はどれですか？",
        ["クラウドサービス", "CD-ROM", "フロッピーディスク", "カセットテープ"],
        0,
        "現代のスマートフォンアプリの多くはクラウドサービスを活用しています。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "オンラインストレージサービスの例として正しいものはどれですか？",
        ["Microsoft Word", "Google Drive", "Adobe Photoshop", "Windows Media Player"],
        1,
        "Google Driveはファイルをクラウド上に保存できるオンラインストレージです。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoTデバイスの例として正しくないものはどれですか？",
        ["スマートウォッチ", "ネット対応エアコン", "スマート電球", "従来の電話機"],
        3,
        "従来の電話機はインターネットに接続する機能がないため、IoTデバイスではありません。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "スマートホームで制御できるものとして正しくないものはどれですか？",
        ["照明", "エアコン", "テレビ", "天気"],
        3,
        "天気は自然現象で、スマートホームでは制御できません。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドサービスを利用する際の注意点として正しいものはどれですか？",
        ["オフラインでも使用可能", "セキュリティ対策不要", "インターネット接続が必要", "無料で無制限利用"],
        2,
        "クラウドサービスの利用にはインターネット接続が必要です。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "センサーの役割として正しいものはどれですか？",
        ["データの計算", "情報の収集", "結果の表示", "プログラムの実行"],
        1,
        "センサーは温度、湿度、光などの情報を感知・収集する装置です。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "GPS技術の主な用途はどれですか？",
        ["音楽再生", "位置情報の取得", "画像編集", "文書作成"],
        1,
        "GPS（Global Positioning System）は衛星を利用した位置測定システムです。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "ウェアラブルデバイスの例として正しいものはどれですか？",
        ["デスクトップPC", "スマートウォッチ", "プリンター", "キーボード"],
        1,
        "スマートウォッチは身に着けて使用するウェアラブルデバイスです。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "著作権で保護される期間は、一般的に著作者の死後何年間ですか（日本）？",
        ["25年", "50年", "70年", "100年"],
        2,
        "日本では著作権は著作者の死後70年間保護されます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "他人の著作物を許可なく使用することを何と言いますか？",
        ["引用", "著作権侵害", "参考", "模倣"],
        1,
        "著作権者の許可なく著作物を使用することは著作権侵害にあたります。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "個人情報保護の観点から注意すべきSNS投稿はどれですか？",
        ["今日の天気", "読んだ本の感想", "住所や電話番号", "好きな音楽"],
        2,
        "個人を特定できる住所や電話番号などの投稿は危険です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "ネットいじめを防ぐために重要なことはどれですか？",
        ["匿名での投稿", "相手の気持ちを考える", "多くの人に拡散", "証拠を残さない"],
        1,
        "インターネット上でも相手の気持ちを考えた発言が重要です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル著作権管理（DRM）の目的は何ですか？",
        ["著作物の不正利用防止", "ファイルサイズ削減", "通信速度向上", "画質改善"],
        0,
        "DRMは音楽や映像などのデジタル著作物の不正コピーを防ぐ技術です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報社会で重要な「情報リテラシー」とは何ですか？",
        ["プログラミング技術", "情報を適切に活用する能力", "タイピング速度", "コンピュータ操作"],
        1,
        "情報リテラシーは情報を収集・判断・活用・発信する総合的な能力です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "インターネット上の情報を利用する際に注意すべきことはどれですか？",
        ["すべての情報を信用", "情報源の確認", "高速ダウンロード", "多くの情報収集"],
        1,
        "インターネット上の情報は信頼性を確認し、批判的に判断することが重要です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "肖像権とは何を保護する権利ですか？",
        ["著作物", "個人の容姿", "発明", "商標"],
        1,
        "肖像権は個人の顔や姿を無断で撮影・公開されない権利です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "フェイクニュース対策として重要なことはどれですか？",
        ["拡散速度", "情報源の確認", "感情的な反応", "話題性重視"],
        1,
        "フェイクニュースに惑わされないよう、複数の信頼できる情報源で確認することが重要です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "サイバーいじめの特徴として正しいものはどれですか？",
        ["一時的な影響", "証拠が残らない", "24時間継続する可能性", "被害が軽微"],
        2,
        "サイバーいじめはインターネットの特性により24時間継続し、深刻な影響を与える可能性があります。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数とは何進法ですか？",
        ["2進法", "10進法", "16進法", "8進法"],
        0,
        "2進数は0と1の2つの数字だけを使って数を表現する2進法です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の「10」を2進数で表すとどうなりますか？",
        ["1010", "1100", "1001", "1111"],
        0,
        "10進数の10は2進数では1010になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数の「1011」を10進数で表すといくつですか？",
        ["9", "10", "11", "12"],
        2,
        "2進数1011は8+2+1=11（10進数）です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数で使用される文字はどれですか？",
        ["0-9のみ", "A-Zすべて", "0-9とA-F", "0-9とA-J"],
        2,
        "16進数は0-9の数字とA-Fの文字（10-15を表す）を使用します。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数の「A」は10進数でいくつですか？",
        ["9", "10", "11", "12"],
        1,
        "16進数のAは10進数の10を表します。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータが2進数を使用する理由として正しいものはどれですか？",
        ["計算が簡単", "電気のON/OFFで表現可能", "記憶容量が大きい", "処理が遅い"],
        1,
        "コンピュータは電気信号のON/OFFで2進数の0/1を表現できるため2進数を使用します。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "1バイトは何ビットですか？",
        ["4ビット", "8ビット", "16ビット", "32ビット"],
        1,
        "1バイトは8ビットです。これはコンピュータの基本的な記憶単位です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数で「1」を足すと「1」になる計算はどれですか？",
        ["0+1", "1+0", "1+1", "0+0"],
        0,
        "2進数では0+1=1になります。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数の「101」を10進数に変換するといくつですか？",
        ["3", "4", "5", "6"],
        2,
        "2進数101は4+0+1=5（10進数）です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数の「FF」は10進数でいくつですか？",
        ["255", "256", "254", "15"],
        0,
        "16進数FFは15×16+15=255（10進数）です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "表計算ソフトで数値の合計を求める関数はどれですか？",
        ["AVERAGE", "SUM", "COUNT", "MAX"],
        1,
        "SUM関数は指定した範囲の数値の合計を計算します。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "表計算ソフトで数値の平均を求める関数はどれですか？",
        ["SUM", "AVERAGE", "TOTAL", "MEAN"],
        1,
        "AVERAGE関数は指定した範囲の数値の平均値を計算します。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "ワープロソフトで文字を太字にするショートカットキー（Windows）はどれですか？",
        ["Ctrl+B", "Ctrl+I", "Ctrl+U", "Ctrl+T"],
        0,
        "Ctrl+Bで文字を太字（Bold）にできます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "プレゼンテーションソフトで新しいスライドを追加するショートカットキー（Windows）はどれですか？",
        ["Ctrl+N", "Ctrl+M", "Ctrl+S", "Ctrl+A"],
        1,
        "Ctrl+Mで新しいスライドを追加できます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "電子メールで複数の宛先に同じメールを送る際、他の受信者に宛先を知らせたくない場合に使用するのはどれですか？",
        ["TO", "CC", "BCC", "送信"],
        2,
        "BCC（Blind Carbon Copy）は他の受信者に宛先を知らせずに送信できます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイルをPDF形式で保存する利点はどれですか？",
        ["編集が簡単", "ファイルサイズが大きい", "レイアウトが保持される", "印刷できない"],
        2,
        "PDF形式はどの環境でも同じレイアウトで表示・印刷できます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウド上でファイルを共有する利点として正しいものはどれですか？",
        ["インターネット接続不要", "同時編集が可能", "ファイルサイズ制限なし", "セキュリティ不要"],
        1,
        "クラウドサービスにより複数人で同時にファイルを編集・共有できます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビデオ会議システムの基本機能でないものはどれですか？",
        ["音声通話", "画面共有", "文書作成", "録画"],
        2,
        "文書作成はビデオ会議システムの基本機能ではありません。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "データのバックアップが重要な理由はどれですか？",
        ["処理速度向上", "データ損失の防止", "メモリ節約", "画質向上"],
        1,
        "バックアップは機器故障やウイルス感染によるデータ損失を防ぐために重要です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "QRコードの主な用途はどれですか？",
        ["音楽再生", "情報の読み取り", "画像編集", "計算処理"],
        1,
        "QRコードはURLや文字情報などを素早く読み取るために使用されます。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLの<head>タグ内に記述されるものとして正しくないものはどれですか？",
        ["<title>", "<meta>", "<link>", "<h1>"],
        3,
        "<h1>タグは本文（<body>内）に記述する見出しタグです。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSでクラスセレクタを指定する記号はどれですか？",
        ["#", ".", "*", "@"],
        1,
        "クラスセレクタは「.」（ドット）で指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSでIDセレクタを指定する記号はどれですか？",
        ["#", ".", "*", "@"],
        0,
        "IDセレクタは「#」（ハッシュ）で指定します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLのフォーム要素で、テキストを入力するタグはどれですか？",
        ["<form>", "<input>", "<submit>", "<text>"],
        1,
        "<input type=\"text\">でテキスト入力欄を作成します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSのボックスモデルに含まれないものはどれですか？",
        ["margin", "padding", "border", "background"],
        3,
        "ボックスモデルはcontent、padding、border、marginで構成されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "JavaScriptで配列を宣言する正しい方法はどれですか？",
        ["var arr = [];", "var arr = {};", "var arr = ();", "var arr = <>;"],
        0,
        "JavaScriptでは[]を使って配列を宣言します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSでフレックスボックスレイアウトを使用するプロパティはどれですか？",
        ["display: grid", "display: flex", "display: table", "display: inline"],
        1,
        "display: flexでフレックスボックスレイアウトを適用します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLで外部CSSファイルを読み込むタグはどれですか？",
        ["<css>", "<style>", "<link>", "<import>"],
        2,
        "<link rel=\"stylesheet\" href=\"style.css\">で外部CSSを読み込みます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "レスポンシブWebデザインで使用するCSSの機能はどれですか？",
        ["アニメーション", "メディアクエリ", "フォント", "カラー"],
        1,
        "メディアクエリで画面サイズに応じたスタイルを適用します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "JavaScriptでHTML要素を取得する基本的なメソッドはどれですか？",
        ["getElement()", "getElementById()", "findElement()", "selectElement()"],
        1,
        "getElementById()で指定したIDの要素を取得できます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "配列の要素にアクセスするために使用するものはどれですか？",
        ["変数名", "インデックス番号", "データ型", "関数名"],
        1,
        "配列の要素はインデックス番号（通常0から始まる）でアクセスします。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "オブジェクト指向プログラミングの特徴でないものはどれですか？",
        ["継承", "カプセル化", "ポリモーフィズム", "グローバル変数"],
        3,
        "グローバル変数はオブジェクト指向の特徴ではなく、むしろ避けるべき概念です。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "関数の利点として正しくないものはどれですか？",
        ["コードの再利用", "プログラムの構造化", "メモリ使用量の増加", "保守性の向上"],
        2,
        "関数はメモリ使用量を効率化し、コードの重複を避ける利点があります。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "例外処理の目的として正しいものはどれですか？",
        ["処理速度向上", "エラー時の適切な対応", "メモリ節約", "コード短縮"],
        1,
        "例外処理により、エラーが発生してもプログラムが異常終了しないよう制御できます。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "スコープ（有効範囲）の概念として正しいものはどれですか？",
        ["変数の使用可能な範囲", "関数の実行時間", "メモリの容量", "プログラムの行数"],
        0,
        "スコープは変数や関数が有効（使用可能）な範囲を指します。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "再帰関数とは何ですか？",
        ["繰り返し文", "自分自身を呼び出す関数", "条件分岐", "配列処理"],
        1,
        "再帰関数は自分自身を呼び出すことで繰り返し処理を実現する関数です。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "アルゴリズムとは何ですか？",
        ["プログラミング言語", "問題解決の手順", "データ型", "変数"],
        1,
        "アルゴリズムは問題を解決するための具体的な手順や方法です。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ソートアルゴリズムの目的は何ですか？",
        ["データの検索", "データの並び替え", "データの削除", "データの追加"],
        1,
        "ソートアルゴリズムはデータを一定の順序（昇順・降順）に並び替えます。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プログラムの実行時間計算量を表すO記法で、最も効率的なものはどれですか？",
        ["O(n²)", "O(n)", "O(1)", "O(log n)"],
        2,
        "O(1)は定数時間で、データ量に関係なく一定時間で処理が完了します。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ライブラリの利用目的として正しいものはどれですか？",
        ["コードの複雑化", "開発効率の向上", "実行速度の低下", "メモリ使用量の増加"],
        1,
        "ライブラリにより既存の機能を再利用でき、開発効率が向上します。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SQLのJOIN句の目的は何ですか？",
        ["データの削除", "複数テーブルの結合", "データの並び替え", "インデックス作成"],
        1,
        "JOIN句により複数のテーブルのデータを関連付けて結合できます。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データベースの正規化の目的として正しいものはどれですか？",
        ["検索速度向上", "データ重複の排除", "容量増加", "複雑化"],
        1,
        "正規化によりデータの重複を排除し、データの整合性を保ちます。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "インデックスの役割として正しいものはどれですか？",
        ["データの保護", "検索性能の向上", "容量削減", "データ型変更"],
        1,
        "インデックスはデータの検索を高速化するための仕組みです。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "トランザクションの特性「ACID」に含まれないものはどれですか？",
        ["原子性", "一貫性", "独立性", "効率性"],
        3,
        "ACIDは原子性（Atomicity）、一貫性（Consistency）、独立性（Isolation）、持続性（Durability）です。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SQLのGROUP BY句の用途は何ですか？",
        ["データの並び替え", "グループ化と集計", "データの結合", "インデックス作成"],
        1,
        "GROUP BY句でデータをグループ化し、SUM、COUNT等の集計関数と組み合わせて使用します。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "外部キーの役割として正しいものはどれですか？",
        ["データの暗号化", "テーブル間の関連性定義", "検索速度向上", "容量削減"],
        1,
        "外部キーは他のテーブルの主キーを参照し、テーブル間の関連性を定義します。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データベースのバックアップで考慮すべき要素でないものはどれですか？",
        ["バックアップ頻度", "復旧時間", "データ整合性", "画面デザイン"],
        3,
        "画面デザインはデータベースのバックアップとは関係ありません。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "NoSQLデータベースの特徴として正しいものはどれですか？",
        ["厳密なスキーマ", "柔軟なデータ構造", "SQL必須", "リレーション重視"],
        1,
        "NoSQLデータベースは柔軟なデータ構造を持ち、スキーマレスな設計が可能です。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データウェアハウスの主な用途は何ですか？",
        ["リアルタイム処理", "データ分析", "Webアプリケーション", "ゲーム開発"],
        1,
        "データウェアハウスは大量の履歴データを蓄積し、分析に最適化されたデータベースです。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データマイニングの目的として正しいものはどれですか？",
        ["データの暗号化", "有用なパターンの発見", "データの削除", "容量削減"],
        1,
        "データマイニングは大量のデータから有用な知識やパターンを発見する技術です。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "システムの可用性を表す「9」の意味は何ですか？",
        ["稼働率", "処理速度", "容量", "利用者数"],
        0,
        "「ファイブナイン（99.999%）」のように可用性は稼働率をパーセンテージで表します。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "負荷分散の目的として正しいものはどれですか？",
        ["セキュリティ強化", "システム性能向上", "開発速度向上", "コスト削減"],
        1,
        "負荷分散により処理を複数のサーバーに分散し、システム全体の性能を向上させます。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "冗長化システムの利点として正しいものはどれですか？",
        ["コスト削減", "障害耐性向上", "処理速度向上", "開発期間短縮"],
        1,
        "冗長化により一部のシステムが故障してもサービスを継続できます。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "スケーラビリティとは何ですか？",
        ["セキュリティ", "拡張性", "安定性", "互換性"],
        1,
        "スケーラビリティはシステムの負荷増加に対応できる拡張性のことです。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウドコンピューティングのメリットでないものはどれですか？",
        ["初期費用削減", "柔軟性", "完全な制御", "保守性向上"],
        2,
        "クラウドではインフラの完全な制御はできませんが、管理負荷が軽減されます。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "マイクロサービスアーキテクチャの特徴として正しいものはどれですか？",
        ["単一大規模アプリ", "サービス分割", "共通データベース", "同期処理"],
        1,
        "マイクロサービスは機能ごとに独立したサービスに分割する設計手法です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "API（Application Programming Interface）の役割は何ですか？",
        ["ユーザーインターフェース", "システム間連携", "データ保存", "セキュリティ"],
        1,
        "APIは異なるソフトウェア間でデータや機能をやり取りするインターフェースです。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "キャッシュの目的として正しいものはどれですか？",
        ["セキュリティ向上", "アクセス速度向上", "データ保護", "容量増加"],
        1,
        "キャッシュは頻繁にアクセスされるデータを高速アクセス可能な場所に保存し、応答速度を向上させます。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "レガシーシステムの課題として正しいものはどれですか？",
        ["高い性能", "保守の困難さ", "低いコスト", "最新技術"],
        1,
        "レガシーシステムは古い技術で構築されており、保守や拡張が困難になる場合があります。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "DevOpsの目的として正しいものはどれですか？",
        ["開発と運用の分離", "開発と運用の連携", "コスト増加", "品質低下"],
        1,
        "DevOpsは開発（Development）と運用（Operations）の連携により、迅速で安定したサービス提供を実現します。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ブロックチェーン技術の改ざん困難性はどこから生まれますか？",
        ["暗号化", "分散管理", "高速処理", "大容量"],
        1,
        "ブロックチェーンは分散ネットワークで管理されるため、改ざんが非常に困難です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "スマートコントラクトとは何ですか？",
        ["法的契約書", "自動実行される契約", "紙の契約", "口約束"],
        1,
        "スマートコントラクトは条件が満たされた時に自動実行されるプログラム化された契約です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Advanced
    ),
    new Question(
        "VR（仮想現実）とAR（拡張現実）の主な違いは何ですか？",
        ["価格の違い", "現実世界の利用有無", "開発言語", "デバイスサイズ"],
        1,
        "VRは完全な仮想世界、ARは現実世界にデジタル情報を重ね合わせる技術です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "メタバースの特徴として正しくないものはどれですか？",
        ["3D仮想空間", "アバター利用", "リアルタイム交流", "2D画面限定"],
        3,
        "メタバースは3次元の仮想空間でアバターを通じた交流が特徴です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "エッジコンピューティングの利点として正しいものはどれですか？",
        ["中央集権化", "遅延削減", "コスト増加", "複雑性向上"],
        1,
        "エッジコンピューティングはデータ発生源に近い場所で処理を行い、遅延を削減します。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "量子コンピュータが期待される分野として正しくないものはどれですか？",
        ["暗号解読", "薬物開発", "最適化問題", "文書作成"],
        3,
        "量子コンピュータは複雑な計算問題に威力を発揮しますが、一般的な文書作成には適していません。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Advanced
    ),
    new Question(
        "DeFi（分散型金融）の特徴として正しいものはどれですか？",
        ["中央銀行管理", "ブロックチェーン基盤", "政府規制", "紙幣使用"],
        1,
        "DeFiはブロックチェーン技術を基盤とした、中央管理者のない金融システムです。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Advanced
    ),
    new Question(
        "Web3の概念に最も関連する技術はどれですか？",
        ["HTML", "ブロックチェーン", "SQL", "CSS"],
        1,
        "Web3は分散化されたインターネットを目指し、ブロックチェーン技術が中核となります。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Advanced
    ),
    new Question(
        "自動運転レベル5の特徴は何ですか？",
        ["高速道路のみ", "特定条件下", "完全自動運転", "運転者監視必要"],
        2,
        "レベル5は全ての条件下で人間の介入なしに自動運転する完全自動運転です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "NFT（非代替性トークン）の主な特徴は何ですか？",
        ["無制限複製", "一意性", "低価値", "匿名性"],
        1,
        "NFTは各トークンが一意で代替不可能な特徴を持つデジタル資産です。",
        QuestionCategory.EmergingTechnologies,
        DifficultyLevel.Advanced
    ),
    new Question(
        "HTMLのフォームで複数行のテキスト入力欄を作成するタグはどれですか？",
        ["<input>", "<textarea>", "<text>", "<multiline>"],
        1,
        "<textarea>タグは複数行のテキスト入力欄を作成するために使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSで要素を中央に配置するために使用するプロパティはどれですか？",
        ["center", "align", "margin", "position"],
        2,
        "margin: 0 auto; またはmarginプロパティを使用して要素を中央に配置できます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLの<select>タグの用途は何ですか？",
        ["画像表示", "リンク作成", "ドロップダウンメニュー", "テーブル作成"],
        2,
        "<select>タグはドロップダウンメニュー（選択リスト）を作成するために使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSのz-indexプロパティの用途は何ですか？",
        ["文字サイズ", "要素の重なり順", "余白設定", "色指定"],
        1,
        "z-indexは要素の重なり順（前後関係）を制御するプロパティです。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "JavaScriptで文字列の長さを取得するプロパティはどれですか？",
        ["size", "length", "count", "chars"],
        1,
        "lengthプロパティを使用して文字列の長さ（文字数）を取得できます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLの<audio>タグの用途は何ですか？",
        ["動画再生", "音声再生", "画像表示", "テキスト表示"],
        1,
        "<audio>タグは音声ファイルをWebページに埋め込んで再生するために使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSのdisplay: noneとvisibility: hiddenの違いは何ですか？",
        ["同じ効果", "レイアウトへの影響", "色の違い", "速度の違い"],
        1,
        "display: noneは要素をレイアウトから完全に除去し、visibility: hiddenは非表示にするが領域は保持します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLの<canvas>タグの用途は何ですか？",
        ["テキスト編集", "グラフィック描画", "音声再生", "フォーム作成"],
        1,
        "<canvas>タグはJavaScriptを使ってグラフィックや図形を動的に描画するために使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSのflex-directionプロパティのデフォルト値は何ですか？",
        ["column", "row", "row-reverse", "column-reverse"],
        1,
        "flex-directionのデフォルト値はrowで、アイテムが横方向に並びます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "JavaScriptでイベントリスナーを追加するメソッドはどれですか？",
        ["addEvent()", "addEventListener()", "attachEvent()", "bindEvent()"],
        1,
        "addEventListener()メソッドを使用して要素にイベントリスナーを追加します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLの<meta>タグでビューポートを設定する目的は何ですか？",
        ["SEO向上", "レスポンシブ対応", "読み込み速度向上", "セキュリティ強化"],
        1,
        "ビューポートの設定はモバイルデバイスでの表示を最適化し、レスポンシブデザインを実現します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSのposition: relativeの特徴は何ですか？",
        ["固定位置", "元の位置からの相対移動", "親要素に対する絶対位置", "画面に対する固定"],
        1,
        "position: relativeは要素を元の位置から相対的に移動させますが、元の領域は保持されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLでコメントを書く正しい方法はどれですか？",
        ["// コメント", "/* コメント */", "<!-- コメント -->", "# コメント"],
        2,
        "HTMLでは<!-- コメント -->の形式でコメントを記述します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSのbox-shadowプロパティの用途は何ですか？",
        ["背景色設定", "影効果", "枠線設定", "文字装飾"],
        1,
        "box-shadowプロパティは要素に影効果を追加するために使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "JavaScriptでHTMLコンテンツを変更するプロパティはどれですか？",
        ["content", "innerHTML", "text", "value"],
        1,
        "innerHTMLプロパティを使用してHTML要素の内容を動的に変更できます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLの<iframe>タグの用途は何ですか？",
        ["画像表示", "他のページの埋め込み", "動画再生", "音声再生"],
        1,
        "<iframe>タグは他のWebページやコンテンツを現在のページに埋め込むために使用されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSのtransitionプロパティの用途は何ですか？",
        ["レイアウト変更", "アニメーション効果", "色変更", "サイズ変更"],
        1,
        "transitionプロパティはCSSプロパティの変化を滑らかなアニメーションにします。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLの<datalist>タグの用途は何ですか？",
        ["日付選択", "データ表示", "入力候補リスト", "リスト作成"],
        2,
        "<datalist>タグは<input>要素に入力候補のリストを提供します。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSのgridレイアウトとflexレイアウトの主な違いは何ですか？",
        ["色の違い", "1次元vs2次元", "速度の違い", "ブラウザ対応"],
        1,
        "flexは1次元レイアウト、gridは2次元レイアウトで、より複雑なレイアウトに適しています。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Advanced
    ),
    new Question(
        "JavaScriptのsetTimeoutとsetIntervalの違いは何ですか？",
        ["速度の違い", "一回実行vs繰り返し実行", "引数の違い", "戻り値の違い"],
        1,
        "setTimeoutは一度だけ実行、setIntervalは指定間隔で繰り返し実行されます。",
        QuestionCategory.WebDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "変数のスコープ（有効範囲）について正しい説明はどれですか？",
        ["全てグローバル", "宣言した場所により決まる", "すべてローカル", "言語に関係ない"],
        1,
        "変数のスコープは宣言した場所や方法によって、グローバルまたはローカルに決まります。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "配列のインデックス（添字）は通常何番から始まりますか？",
        ["1", "0", "-1", "10"],
        1,
        "多くのプログラミング言語では、配列のインデックスは0から始まります。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムでエラーが発生した時の処理を何と言いますか？",
        ["例外処理", "条件分岐", "繰り返し処理", "入出力処理"],
        0,
        "例外処理（try-catch文など）はプログラム実行時のエラーを適切に処理する仕組みです。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "関数の戻り値について正しい説明はどれですか？",
        ["必ず数値", "関数が呼び出し元に返す値", "引数と同じ", "常に文字列"],
        1,
        "戻り値は関数が処理結果として呼び出し元に返す値です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "再帰関数とは何ですか？",
        ["引数が多い関数", "自分自身を呼び出す関数", "戻り値がない関数", "長い関数"],
        1,
        "再帰関数は自分自身を呼び出すことで、繰り返し処理を実現する関数です。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プログラムのテストで「単体テスト」とは何ですか？",
        ["全体のテスト", "個別機能のテスト", "性能テスト", "セキュリティテスト"],
        1,
        "単体テストは個別の関数やメソッドが正しく動作するかを確認するテストです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムのコメント文の主な目的は何ですか？",
        ["実行速度向上", "コードの説明", "エラー回避", "メモリ節約"],
        1,
        "コメント文はコードの動作や意図を説明し、保守性を向上させる目的があります。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "オブジェクト指向プログラミングの「継承」とは何ですか？",
        ["データの受け渡し", "既存クラスの機能を引き継ぐ", "変数の宣言", "関数の呼び出し"],
        1,
        "継承は既存のクラスの特性や機能を新しいクラスが引き継ぐOOPの重要な概念です。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プログラムの「デバッグ」とは何ですか？",
        ["プログラム作成", "エラー修正", "テスト実行", "コード整理"],
        1,
        "デバッグはプログラムのバグ（エラー）を発見し、修正する作業です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソートアルゴリズムの「バブルソート」の特徴は何ですか？",
        ["最も高速", "隣接要素の比較交換", "メモリ使用量大", "複雑な処理"],
        1,
        "バブルソートは隣り合う要素を比較して交換を繰り返す、理解しやすいソートアルゴリズムです。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プログラムの「ライブラリ」とは何ですか？",
        ["本の図書館", "再利用可能な機能集", "プログラム全体", "エラー情報"],
        1,
        "ライブラリは再利用可能な機能やコードをまとめたもので、開発効率を向上させます。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムの「API」とは何ですか？",
        ["プログラミング言語", "アプリケーション間の接続仕様", "開発環境", "データベース"],
        1,
        "API（Application Programming Interface）はアプリケーション間でデータや機能をやり取りする仕様です。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プログラムの「バージョン管理」の目的は何ですか？",
        ["性能向上", "変更履歴の管理", "エラー修正", "新機能追加"],
        1,
        "バージョン管理はソースコードの変更履歴を記録し、複数人での開発を支援するシステムです。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムの「リファクタリング」とは何ですか？",
        ["機能追加", "コード構造の改善", "バグ修正", "テスト追加"],
        1,
        "リファクタリングは機能を変えずにコードの構造や可読性を改善する作業です。",
        QuestionCategory.Programming,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プログラムの「ペアプログラミング」とは何ですか？",
        ["2台のPCを使用", "2人で協力してプログラミング", "2つの言語を使用", "2回テストする"],
        1,
        "ペアプログラミングは2人の開発者が1台のPCで協力してプログラムを作成する手法です。",
        QuestionCategory.Programming,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの「CRUD」操作のCは何を意味しますか？",
        ["Copy", "Create", "Change", "Cancel"],
        1,
        "CRUDのCは「Create（作成）」を意味し、新しいデータを追加する操作です。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "SQLのSELECT文で重複を除去するキーワードはどれですか？",
        ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
        1,
        "DISTINCTキーワードを使用して検索結果から重複した行を除去できます。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの「インデックス」の主な目的は何ですか？",
        ["データ保護", "検索速度向上", "容量削減", "バックアップ"],
        1,
        "インデックスはデータの検索速度を向上させるためのデータ構造です。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SQLのJOIN文の目的は何ですか？",
        ["データ削除", "複数テーブルの結合", "データ並び替え", "重複除去"],
        1,
        "JOIN文は複数のテーブルを関連付けて結合し、一つの結果セットにします。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データベースの「トランザクション」とは何ですか？",
        ["データ型", "一連の処理の単位", "テーブル名", "インデックス"],
        1,
        "トランザクションは全て成功するか全て失敗するかの一連の処理単位です。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SQLのWHERE句の目的は何ですか？",
        ["データ並び替え", "条件指定", "テーブル結合", "グループ化"],
        1,
        "WHERE句は検索や更新の条件を指定し、対象データを絞り込みます。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの「正規化」の主な目的は何ですか？",
        ["処理速度向上", "データ冗長性の削減", "容量増加", "複雑化"],
        1,
        "正規化はデータの冗長性を削減し、データの整合性を保つ設計手法です。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SQLのORDER BY句の目的は何ですか？",
        ["データ削除", "結果の並び替え", "テーブル作成", "データ更新"],
        1,
        "ORDER BY句は検索結果を指定した列で昇順または降順に並び替えます。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの「ビュー」とは何ですか？",
        ["実際のテーブル", "仮想的なテーブル", "インデックス", "バックアップ"],
        1,
        "ビューは1つ以上のテーブルから作られる仮想的なテーブルで、複雑なクエリを簡素化します。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SQLのGROUP BY句の目的は何ですか？",
        ["データ削除", "データのグループ化", "テーブル結合", "インデックス作成"],
        1,
        "GROUP BY句は指定した列の値でデータをグループ化し、集約関数と組み合わせて使用します。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データベースの「制約」の目的は何ですか？",
        ["処理高速化", "データ整合性保証", "容量削減", "接続数制限"],
        1,
        "制約はデータの整合性を保ち、不正なデータの入力を防ぐルールです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "SQLのUNION演算子の目的は何ですか？",
        ["テーブル結合", "結果セットの結合", "データ削除", "インデックス作成"],
        1,
        "UNION演算子は複数のSELECT文の結果を結合して一つの結果セットにします。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データベースの「ストアドプロシージャ」とは何ですか？",
        ["保存されたデータ", "事前定義された処理", "テーブルの種類", "接続方法"],
        1,
        "ストアドプロシージャはデータベースに保存された再利用可能なSQL処理群です。",
        QuestionCategory.Database,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データベースの「バックアップ」の主な目的は何ですか？",
        ["処理高速化", "データ保護", "容量削減", "接続数増加"],
        1,
        "バックアップはデータの損失や破損に備えてデータを複製保存することです。",
        QuestionCategory.Database,
        DifficultyLevel.Basic
    ),
    new Question(
        "NoSQLデータベースの特徴として正しいものはどれですか？",
        ["厳密なスキーマ", "柔軟なデータ構造", "SQL必須", "リレーション重視"],
        1,
        "NoSQLは柔軟なデータ構造を持ち、非構造化データや大量データの処理に適しています。",
        QuestionCategory.Database,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "OSI参照モデルは何層で構成されていますか？",
        ["5層", "6層", "7層", "8層"],
        2,
        "OSI参照モデルは7層（物理層、データリンク層、ネットワーク層、トランスポート層、セッション層、プレゼンテーション層、アプリケーション層）で構成されています。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "DHCPの主な機能は何ですか？",
        ["ドメイン名解決", "IPアドレス自動割り当て", "暗号化", "ファイル転送"],
        1,
        "DHCP（Dynamic Host Configuration Protocol）はIPアドレスを自動的に割り当てるプロトコルです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "ポート番号80は通常何のプロトコルで使用されますか？",
        ["FTP", "HTTP", "SMTP", "POP3"],
        1,
        "ポート番号80は通常HTTP（Web）通信で使用される標準ポートです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "MACアドレスは何ビットで構成されていますか？",
        ["32ビット", "48ビット", "64ビット", "128ビット"],
        1,
        "MACアドレスは48ビット（6バイト）で構成され、ネットワークカードの固有識別子です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "VPNの主な目的は何ですか？",
        ["速度向上", "安全な通信", "容量増加", "接続数増加"],
        1,
        "VPN（Virtual Private Network）は公衆ネットワーク上で安全な仮想専用回線を構築する技術です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "DNSのTTL（Time To Live）の目的は何ですか？",
        ["セキュリティ強化", "キャッシュ期間制御", "速度向上", "接続数制限"],
        1,
        "TTLはDNSレコードがキャッシュされる期間を制御し、情報の鮮度を管理します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロキシサーバーの主な機能は何ですか？",
        ["暗号化", "中継・キャッシュ", "ウイルス検出", "バックアップ"],
        1,
        "プロキシサーバーはクライアントとサーバー間の通信を中継し、キャッシュ機能も提供します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "セキュリティの「CIA」トライアドのCは何を意味しますか？",
        ["Confidentiality", "Complexity", "Capacity", "Connectivity"],
        0,
        "CIAトライアドのCは機密性（Confidentiality）を意味します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ソーシャルエンジニアリング攻撃の特徴は何ですか？",
        ["技術的攻撃", "人間の心理を悪用", "システム脆弱性利用", "物理的破壊"],
        1,
        "ソーシャルエンジニアリングは人間の心理や行動の隙を突いて情報を入手する攻撃手法です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "ランサムウェアの主な特徴は何ですか？",
        ["データ削除", "ファイル暗号化と身代金要求", "システム監視", "速度低下"],
        1,
        "ランサムウェアはファイルを暗号化して使用不能にし、復号のために身代金を要求するマルウェアです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "多要素認証（MFA）に含まれない要素はどれですか？",
        ["知識要素", "所持要素", "生体要素", "時間要素"],
        3,
        "多要素認証は知識（パスワード）、所持（トークン）、生体（指紋）の要素を組み合わせます。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SQLインジェクション攻撃の対策として最も効果的なものはどれですか？",
        ["パスワード強化", "パラメータ化クエリ", "暗号化", "バックアップ"],
        1,
        "パラメータ化クエリ（プリペアドステートメント）はSQLインジェクション攻撃の最も効果的な対策です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ゼロデイ攻撃とは何ですか？",
        ["夜中の攻撃", "未知の脆弱性を悪用", "初回の攻撃", "コストゼロの攻撃"],
        1,
        "ゼロデイ攻撃は修正パッチが提供される前の未知の脆弱性を悪用する攻撃です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ネットワークの「DMZ」とは何ですか？",
        ["危険地帯", "非武装地帯・緩衝区域", "データ保管場所", "管理区域"],
        1,
        "DMZ（DeMilitarized Zone）は内部ネットワークとインターネットの間の緩衝区域です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハニーポットの目的は何ですか？",
        ["データ保存", "攻撃者の誘導・分析", "速度向上", "容量増加"],
        1,
        "ハニーポットは攻撃者を誘導して攻撃手法を分析し、セキュリティ向上に役立てるシステムです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "機械学習の「教師あり学習」に必要なものは何ですか？",
        ["大量データのみ", "正解ラベル付きデータ", "高性能PC", "インターネット接続"],
        1,
        "教師あり学習には入力データと正解ラベル（目的変数）がセットになった訓練データが必要です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "ディープラーニングの特徴として正しいものはどれですか？",
        ["浅い層のネットワーク", "多層ニューラルネットワーク", "線形処理のみ", "ルールベース"],
        1,
        "ディープラーニングは多層ニューラルネットワークを使用した機械学習手法です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIの「自然言語処理」の応用例として正しくないものはどれですか？",
        ["機械翻訳", "音声認識", "画像認識", "チャットボット"],
        2,
        "画像認識は自然言語処理ではなく、コンピュータビジョンの分野です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習の「過学習」とは何ですか？",
        ["学習不足", "訓練データに特化しすぎ", "学習時間が長い", "データが多すぎ"],
        1,
        "過学習は訓練データに特化しすぎて、新しいデータに対する汎化性能が低下する現象です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "AIの「強化学習」の特徴は何ですか？",
        ["正解データ必須", "試行錯誤で学習", "教師なし学習", "ルールベース"],
        1,
        "強化学習は環境との相互作用を通じて試行錯誤により最適な行動を学習する手法です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "機械学習モデルの性能評価指標「精度（accuracy）」とは何ですか？",
        ["処理速度", "正解率", "学習時間", "データ量"],
        1,
        "精度は全体の予測のうち正解した割合を示す基本的な性能評価指標です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIの「転移学習」の利点は何ですか？",
        ["処理速度向上", "既存知識の活用", "データ削減", "精度低下"],
        1,
        "転移学習は既存のモデルの知識を活用して、少ないデータで効率的に学習できます。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "機械学習の「クラスタリング」の目的は何ですか？",
        ["予測", "分類", "データのグループ化", "回帰"],
        2,
        "クラスタリングは類似したデータを自動的にグループ化する教師なし学習手法です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIの倫理的課題として重要でないものはどれですか？",
        ["バイアス・差別", "プライバシー", "透明性", "処理速度"],
        3,
        "処理速度は技術的課題であり、倫理的課題ではありません。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習の「特徴量エンジニアリング」とは何ですか？",
        ["モデル選択", "データの前処理・特徴抽出", "結果評価", "システム構築"],
        1,
        "特徴量エンジニアリングは機械学習の性能向上のために適切な特徴量を設計・抽出する作業です。",
        QuestionCategory.ArtificialIntelligence,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CPUのクロック周波数の単位は何ですか？",
        ["バイト", "ヘルツ", "ワット", "ボルト"],
        1,
        "CPUのクロック周波数はヘルツ（Hz）で表され、GHz（ギガヘルツ）単位で表示されることが多いです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SSDとHDDの主な違いは何ですか？",
        ["容量", "記録方式", "価格", "サイズ"],
        1,
        "SSDは半導体メモリ、HDDは磁気ディスクという異なる記録方式を使用しています。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータの「キャッシュメモリ」の目的は何ですか？",
        ["長期保存", "処理速度向上", "容量増加", "セキュリティ強化"],
        1,
        "キャッシュメモリはCPUが頻繁にアクセスするデータを高速に読み書きするためのメモリです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "USBの「USB 3.0」と「USB 2.0」の主な違いは何ですか？",
        ["形状", "転送速度", "電力消費", "対応OS"],
        1,
        "USB 3.0はUSB 2.0よりも大幅に高速なデータ転送が可能です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータの「BIOS」の役割は何ですか？",
        ["アプリ実行", "基本入出力制御", "データ保存", "ネットワーク接続"],
        1,
        "BIOS（Basic Input/Output System）はコンピュータ起動時の基本的な入出力制御を行います。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "マザーボードの役割は何ですか？",
        ["演算処理", "各部品の接続基板", "データ保存", "画面表示"],
        1,
        "マザーボードはCPU、メモリ、拡張カードなど各部品を接続する基板です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "RAMとROMの主な違いは何ですか？",
        ["容量", "読み書き可否", "速度", "価格"],
        1,
        "RAMは読み書き可能、ROMは読み出し専用（またはの書き換え困難）なメモリです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "グラフィックカード（GPU）の主な役割は何ですか？",
        ["音声処理", "画像・映像処理", "ネットワーク通信", "データ保存"],
        1,
        "GPU（Graphics Processing Unit）は画像や映像の描画処理を専門に行うプロセッサです。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータの「プロセス」とは何ですか？",
        ["データファイル", "実行中のプログラム", "ハードウェア", "ネットワーク通信"],
        1,
        "プロセスはメモリ上で実行されているプログラムのことで、OSが管理します。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンピュータウイルスの感染経路として最も一般的なものはどれですか？",
        ["電源コード", "インターネット・メール", "モニター", "キーボード"],
        1,
        "インターネットやメールを通じた感染が現在最も一般的なウイルス感染経路です。",
        QuestionCategory.ComputerBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "8ビットで表現できる最大の10進数はいくつですか？",
        ["128", "255", "256", "127"],
        1,
        "8ビットでは0から255まで（2^8 - 1 = 255）の256通りの値を表現できます。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "16進数の「A」は10進数でいくつですか？",
        ["9", "10", "11", "15"],
        1,
        "16進数では A=10, B=11, C=12, D=13, E=14, F=15 を表します。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数「1111」を10進数に変換すると？",
        ["14", "15", "16", "17"],
        1,
        "1×8 + 1×4 + 1×2 + 1×1 = 8 + 4 + 2 + 1 = 15",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "1キロバイト（KB）は何バイトですか？",
        ["1000バイト", "1024バイト", "1048バイト", "1200バイト"],
        1,
        "コンピュータでは2進数ベースで1KB = 1024バイト（2^10）です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "10進数の「8」を2進数に変換すると？",
        ["1000", "1001", "1010", "1011"],
        0,
        "8 = 1×8 + 0×4 + 0×2 + 0×1 = 1000₂",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数「1F」を10進数に変換すると？",
        ["30", "31", "32", "33"],
        1,
        "1×16 + F(15) = 16 + 15 = 31",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "2進数で「負の数」を表現する最も一般的な方法は何ですか？",
        ["符号ビット", "1の補数", "2の補数", "絶対値表現"],
        2,
        "2の補数表現が現在のコンピュータで最も一般的な負の数の表現方法です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "1メガバイト（MB）は約何バイトですか？",
        ["100万バイト", "104万バイト", "120万バイト", "200万バイト"],
        1,
        "1MB = 1024KB = 1024×1024 = 1,048,576バイト（約104万バイト）です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "8進数の「17」を10進数に変換すると？",
        ["15", "16", "17", "18"],
        0,
        "1×8 + 7×1 = 8 + 7 = 15",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IPアドレスの各オクテット（8ビット）で表現できる数値の範囲は？",
        ["1-255", "0-255", "1-256", "0-256"],
        1,
        "8ビットで表現できる値は0から255まで（2^8 - 1）の範囲です。",
        QuestionCategory.NumberSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドサービスの「SaaS」の例として正しいものはどれですか？",
        ["Google Drive", "Amazon EC2", "Microsoft Azure", "Google App Engine"],
        0,
        "Google DriveはSaaS（Software as a Service）の代表例で、ソフトウェアをサービスとして提供します。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "エッジコンピューティングが重要視される理由は何ですか？",
        ["コスト削減", "リアルタイム処理", "セキュリティ向上", "容量増加"],
        1,
        "エッジコンピューティングはデータ発生源近くで処理することで、リアルタイム性を向上させます。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Dockerコンテナの利点として正しくないものはどれですか？",
        ["軽量", "可搬性", "分離性", "完全なセキュリティ"],
        3,
        "Dockerコンテナは軽量で可搬性があり分離されていますが、完全なセキュリティを保証するものではありません。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IoTデバイスのセキュリティ課題として最も重要なものはどれですか？",
        ["処理速度", "デフォルトパスワード", "デザイン", "価格"],
        1,
        "多くのIoTデバイスがデフォルトパスワードを使用しており、これが重大なセキュリティリスクとなっています。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "サーバーレスコンピューティングの特徴は何ですか？",
        ["サーバー不要", "インフラ管理不要", "無料利用", "無制限処理"],
        1,
        "サーバーレスはサーバーインフラの管理をクラウドプロバイダーが行い、開発者はコードに集中できます。",
        QuestionCategory.CloudComputing,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ソフトウェア開発の「CI/CD」のCIは何を意味しますか？",
        ["Code Integration", "Continuous Integration", "Computer Interface", "Code Implementation"],
        1,
        "CIは継続的インテグレーション（Continuous Integration）で、コード変更を頻繁に統合する手法です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ソフトウェアテストの「ブラックボックステスト」とは何ですか？",
        ["内部構造をテスト", "外部仕様をテスト", "セキュリティテスト", "性能テスト"],
        1,
        "ブラックボックステストは内部実装を知らずに外部仕様や機能をテストする手法です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "アジャイル開発の「スプリント」とは何ですか？",
        ["最終テスト", "短期間の開発サイクル", "プロジェクト開始", "デプロイ作業"],
        1,
        "スプリントは通常1-4週間の短期間で区切られた開発サイクルで、動作するソフトウェアを作成します。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソフトウェアの「技術的負債」とは何ですか？",
        ["開発費用", "将来の開発効率低下要因", "ライセンス料", "保守費用"],
        1,
        "技術的負債は短期的な解決策により、将来の開発・保守が困難になるコードの品質問題です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コードレビューの主な目的は何ですか？",
        ["作業時間測定", "品質向上と知識共有", "進捗管理", "人事評価"],
        1,
        "コードレビューはバグの早期発見、コード品質向上、チーム内の知識共有が主な目的です。",
        QuestionCategory.SoftwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画の「フレームレート」とは何ですか？",
        ["画質", "1秒間の画像数", "ファイルサイズ", "圧縮率"],
        1,
        "フレームレートは1秒間に表示される画像（フレーム）の枚数で、fps（frames per second）で表します。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像の「解像度」を表す単位はどれですか？",
        ["Hz", "dpi", "MB", "GB"],
        1,
        "dpi（dots per inch）は1インチあたりのドット数を表し、画像の解像度を示す単位です。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Basic
    ),
    new Question(
        "動画圧縮で「可逆圧縮」と「非可逆圧縮」の違いは何ですか？",
        ["速度の違い", "データ復元可能性", "ファイル形式", "色数の違い"],
        1,
        "可逆圧縮は完全復元可能、非可逆圧縮は一部データを削除して圧縮率を上げますが完全復元はできません。",
        QuestionCategory.Multimedia,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "企業の「コンプライアンス」とは何ですか？",
        ["利益追求", "法令遵守", "技術革新", "市場拡大"],
        1,
        "コンプライアンスは企業が法令や規則、社内ルールを守って事業を行うことです。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "リモートワークで重要なセキュリティ対策はどれですか？",
        ["高速インターネット", "VPN接続", "大画面モニター", "高性能PC"],
        1,
        "VPN接続により安全な通信を確保することがリモートワークでの基本的なセキュリティ対策です。",
        QuestionCategory.BusinessApplications,
        DifficultyLevel.Basic
    ),
    new Question(
        "オペレーティングシステム（OS）の主な役割は何ですか？",
        ["アプリケーション作成", "ハードウェアとソフトウェアの仲介", "インターネット接続", "データ保存"],
        1,
        "OSはハードウェアリソースを管理し、アプリケーションとハードウェア間の仲介を行います。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "プロセスとスレッドの主な違いは何ですか？",
        ["実行速度", "メモリ空間の共有", "プログラムサイズ", "作成時間"],
        1,
        "プロセスは独立したメモリ空間を持ち、スレッドは同一プロセス内でメモリ空間を共有します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "マルチタスクOSの利点は何ですか？",
        ["単一アプリ高速化", "複数アプリ同時実行", "メモリ節約", "バッテリー持続"],
        1,
        "マルチタスクOSは複数のアプリケーションを同時に実行できる機能を提供します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "仮想メモリの目的は何ですか？",
        ["処理速度向上", "物理メモリより大きなメモリ空間の提供", "データ保護", "ネットワーク通信"],
        1,
        "仮想メモリは物理メモリ容量を超えた大きなメモリ空間をプログラムに提供する仕組みです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ファイルシステムの役割として正しいものはどれですか？",
        ["計算処理", "ファイルの管理と保存", "ネットワーク通信", "ユーザー認証"],
        1,
        "ファイルシステムはストレージデバイス上のファイルの管理・組織化を行います。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "デッドロック（deadlock）とは何ですか？",
        ["プロセス終了", "リソース競合による停止状態", "メモリ不足", "CPU過負荷"],
        1,
        "デッドロックは複数のプロセスがお互いのリソースを待ち続け、実行が停止する状態です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "スケジューリングアルゴリズムの「FCFS」とは何ですか？",
        ["最短ジョブ優先", "先着順", "優先度順", "ラウンドロビン"],
        1,
        "FCFS（First Come First Served）は到着順にプロセスを実行するスケジューリング方式です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "セマフォ（semaphore）の用途は何ですか？",
        ["メモリ管理", "プロセス間同期", "ファイル暗号化", "ネットワーク制御"],
        1,
        "セマフォは複数のプロセスが共有リソースにアクセスする際の同期制御に使用されます。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ページング方式の利点は何ですか？",
        ["メモリの効率的利用", "処理速度向上", "セキュリティ強化", "消費電力削減"],
        0,
        "ページング方式はメモリを固定サイズの「ページ」に分割し、効率的なメモリ管理を実現します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロセスの状態遷移で「実行状態」から「待機状態」に移る原因は何ですか？",
        ["計算完了", "I/O操作開始", "メモリ不足", "電源切断"],
        1,
        "I/O操作などでプロセスが何かを待つ必要が生じると、実行状態から待機状態に移ります。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ディスクスケジューリングの「SCAN」アルゴリズムの特徴は何ですか？",
        ["到着順処理", "エレベータ式移動", "最短距離優先", "ランダム処理"],
        1,
        "SCANアルゴリズムはディスクヘッドがエレベータのように一方向に移動しながら要求を処理します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "Linuxでファイルの権限を変更するコマンドは何ですか？",
        ["ls", "chmod", "cd", "pwd"],
        1,
        "chmodコマンドはファイルやディレクトリのアクセス権限を変更するLinuxコマンドです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "Windowsの「レジストリ」の役割は何ですか？",
        ["ウイルス検出", "システム設定情報の保存", "ファイル圧縮", "ネットワーク管理"],
        1,
        "レジストリはWindowsのシステム設定やアプリケーション設定を階層的に保存するデータベースです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロセス間通信（IPC）の方法でないものはどれですか？",
        ["パイプ", "共有メモリ", "メッセージキュー", "CPU"],
        3,
        "CPU自体はプロセス間通信の方法ではありません。パイプ、共有メモリ、メッセージキューなどがIPC手法です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "スワッピング（swapping）とは何ですか？",
        ["データ暗号化", "メモリとディスク間のデータ移動", "ファイル圧縮", "プロセス終了"],
        1,
        "スワッピングは物理メモリ不足時に、使用頻度の低いデータを一時的にディスクに移動させる仕組みです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "システム管理者の主な役割でないものはどれですか？",
        ["サーバー保守", "ユーザー管理", "セキュリティ対策", "プログラム開発"],
        3,
        "プログラム開発は開発者の役割で、システム管理者の主要業務ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "ログファイルの主な用途は何ですか？",
        ["データ保存", "システム動作記録", "設定変更", "プログラム実行"],
        1,
        "ログファイルはシステムの動作状況、エラー、アクセス記録などを時系列で記録します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "cronとは何ですか？",
        ["ファイル形式", "定期実行システム", "暗号化方式", "ネットワークプロトコル"],
        1,
        "cronはUnix/Linuxで指定した時刻にコマンドを自動実行するスケジューリングシステムです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "システム監視で重要な指標でないものはどれですか？",
        ["CPU使用率", "メモリ使用率", "ディスク容量", "社員数"],
        3,
        "社員数はシステム監視の技術的指標ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "バックアップの「3-2-1ルール」とは何ですか？",
        ["3台のサーバー使用", "3つのコピー、2つの異なる媒体、1つのオフサイト", "3時間ごとのバックアップ", "3回の確認作業"],
        1,
        "3-2-1ルールは重要データを3つ保存、2つの異なる媒体使用、1つを離れた場所に保管するバックアップ戦略です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "RAID 1の特徴は何ですか？",
        ["高速化", "ミラーリング（複製）", "分散保存", "圧縮保存"],
        1,
        "RAID 1は同じデータを2台のディスクに同時書き込みし、冗長性を確保するミラーリング方式です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "システムパフォーマンス改善の方法でないものはどれですか？",
        ["メモリ増設", "SSD導入", "不要プロセス停止", "画面の明度上げ"],
        3,
        "画面の明度調整はシステムパフォーマンスには影響しません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "Linuxの「sudo」コマンドの用途は何ですか？",
        ["ファイル検索", "管理者権限での実行", "プロセス停止", "ネットワーク設定"],
        1,
        "sudoは一般ユーザーが一時的に管理者権限でコマンドを実行するために使用します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "システムの「可用性」を表す一般的な指標は何ですか？",
        ["レスポンス時間", "稼働率（%）", "スループット", "データ量"],
        1,
        "可用性はシステムが正常に稼働している時間の割合（稼働率）で表現されます。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "セキュリティパッチ適用時の注意点として最も重要なものは何ですか？",
        ["速度優先", "テスト環境での事前確認", "コスト削減", "見た目の改善"],
        1,
        "本番環境に適用する前に、テスト環境でパッチの動作確認を行うことが重要です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "WindowsのイベントビューアーでEventIDが何を表しますか？",
        ["エラーの種類・内容", "発生時刻", "影響範囲", "解決手順"],
        0,
        "EventIDは特定のイベントやエラーの種類を識別するための番号です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ディスク容量不足の対処法として適切でないものはどれですか？",
        ["不要ファイル削除", "ログファイル整理", "新しいディスク追加", "CPUの交換"],
        3,
        "CPU交換はディスク容量不足の解決にはなりません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "サービスの「自動起動」設定の目的は何ですか？",
        ["処理速度向上", "システム再起動時の自動サービス開始", "セキュリティ強化", "容量節約"],
        1,
        "自動起動設定により、システム再起動後に重要なサービスが自動的に開始されます。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "システム復旧時間を短縮する方法として効果的でないものはどれですか？",
        ["定期バックアップ", "復旧手順書準備", "冗長化構成", "デスクトップの壁紙変更"],
        3,
        "壁紙変更はシステム復旧とは無関係です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "Linuxの「top」コマンドで確認できる情報は何ですか？",
        ["ファイル一覧", "リアルタイムプロセス状況", "ネットワーク設定", "ディスク容量"],
        1,
        "topコマンドは実行中のプロセス、CPU・メモリ使用率などをリアルタイムで表示します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ファイアウォールの設定で「デフォルト拒否」の意味は何ですか？",
        ["すべて許可", "明示的に許可されたもの以外は拒否", "一部許可", "設定無効"],
        1,
        "デフォルト拒否は明示的に許可ルールが設定されていない通信をすべて拒否するセキュリティ原則です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "障害対応の優先順位を決める要素として最も重要なものは何ですか？",
        ["発見者の役職", "業務への影響度", "修復コスト", "発生頻度"],
        1,
        "業務への影響度が最も高い障害から優先的に対応することが一般的です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "キャパシティプランニングの目的は何ですか？",
        ["コスト削減", "将来の需要に対応するリソース計画", "現状分析", "人員配置"],
        1,
        "キャパシティプランニングは将来の負荷増加に備えて必要なシステムリソースを計画することです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "インシデント管理の最初の手順は何ですか？",
        ["原因調査", "インシデントの記録・分類", "復旧作業", "報告書作成"],
        1,
        "ITIL等の標準では、まずインシデントを適切に記録・分類することから始まります。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "change管理プロセスで最も重要な段階は何ですか？",
        ["変更要求", "影響評価と承認", "変更実施", "変更後レビュー"],
        1,
        "変更の影響を評価し、適切な承認を得ることが安全な変更管理の鍵となります。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ネットワーク管理でSNMPプロトコルの用途は何ですか？",
        ["ファイル転送", "機器監視・管理", "メール送信", "Web閲覧"],
        1,
        "SNMP（Simple Network Management Protocol）はネットワーク機器の監視・管理を行うプロトコルです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "侵入検知システム（IDS）の主な機能は何ですか？",
        ["データバックアップ", "不正アクセスの検出", "ファイル暗号化", "パスワード管理"],
        1,
        "IDS（Intrusion Detection System）は不正なアクセスや攻撃を検知するセキュリティシステムです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ネットワークトラフィック監視で重要な指標でないものはどれですか？",
        ["帯域使用率", "パケット損失率", "応答時間", "電力消費量"],
        3,
        "電力消費量はネットワークトラフィック監視の指標ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "VLANの主な利点は何ですか？",
        ["速度向上", "論理的なネットワーク分割", "コスト削減", "設置面積削減"],
        1,
        "VLAN（Virtual LAN）は物理的なネットワークを論理的に分割し、セキュリティと管理性を向上させます。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "DDoS攻撃の対策として効果的でないものはどれですか？",
        ["帯域制限", "トラフィック分析", "ファイアウォール設定", "キーボード交換"],
        3,
        "キーボード交換はDDoS攻撃対策とは無関係です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "SSL/TLS証明書の主な目的は何ですか？",
        ["速度向上", "通信内容の暗号化と相手認証", "ファイル圧縮", "バックアップ"],
        1,
        "SSL/TLS証明書は通信の暗号化と通信相手の正当性を確認するために使用されます。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "プロキシサーバーの役割として正しくないものはどれですか？",
        ["キャッシュ機能", "アクセス制御", "通信中継", "ファイル作成"],
        3,
        "ファイル作成はプロキシサーバーの主要機能ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "ネットワークセグメンテーションの目的は何ですか？",
        ["速度向上", "セキュリティ強化と管理簡素化", "コスト削減", "設置簡素化"],
        1,
        "セグメンテーションによりネットワークを分割し、セキュリティの向上と管理の簡素化を図ります。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ポートスキャンとは何ですか？",
        ["ハードウェア診断", "開いているポートの調査", "ファイル検索", "メモリ診断"],
        1,
        "ポートスキャンは対象システムで開いているネットワークポートを調査する技術です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハニーポット（honeypot）の用途は何ですか？",
        ["高速化", "攻撃者の誘導・調査", "データ保存", "バックアップ"],
        1,
        "ハニーポットは攻撃者を意図的に誘導し、攻撃手法を調査・分析するためのシステムです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ログ分析で異常を検知する手法でないものはどれですか？",
        ["パターンマッチング", "閾値監視", "統計分析", "画面の色変更"],
        3,
        "画面の色変更はログ分析手法ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "ネットワークの「DMZ」とは何ですか？",
        ["高速化領域", "非武装地帯（中間ネットワーク）", "データ保存領域", "管理者専用領域"],
        1,
        "DMZ（DeMilitarized Zone）は内部ネットワークとインターネットの中間に配置するセキュリティ領域です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "VPNの種類でないものはどれですか？",
        ["IPsec VPN", "SSL VPN", "L2TP VPN", "HTTP VPN"],
        3,
        "HTTP VPNという標準的なVPN技術はありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ネットワーク機器の冗長化でHSRPの役割は何ですか？",
        ["負荷分散", "ゲートウェイの冗長化", "暗号化", "圧縮"],
        1,
        "HSRP（Hot Standby Router Protocol）は複数のルーターで仮想的なゲートウェイを構成し冗長化を実現します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "セキュリティ監査で重要な要素でないものはどれですか？",
        ["アクセス権限確認", "ログ調査", "脆弱性評価", "机の整理整頓"],
        3,
        "机の整理整頓はセキュリティ監査の技術的要素ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "システム運用で「SLA」とは何ですか？",
        ["システム分析", "サービスレベル合意", "ソフトウェアライセンス", "セキュリティ監査"],
        1,
        "SLA（Service Level Agreement）はサービス提供者と利用者間でサービス品質を合意した契約です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "インシデント対応で最優先すべきことは何ですか？",
        ["原因究明", "サービス復旧", "責任者処罰", "コスト算出"],
        1,
        "まずサービス復旧を最優先し、業務への影響を最小限に抑えることが重要です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "システムメンテナンスの種類でないものはどれですか？",
        ["予防保守", "緊急保守", "改良保守", "装飾保守"],
        3,
        "装飾保守というメンテナンス種類はありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "バックアップ方式の「増分バックアップ」の特徴は何ですか？",
        ["全データを毎回保存", "前回から変更されたデータのみ保存", "圧縮して保存", "暗号化して保存"],
        1,
        "増分バックアップは前回のバックアップ以降に変更されたファイルのみを保存します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "災害復旧計画（DRP）で重要な指標「RTO」とは何ですか？",
        ["復旧時間目標", "復旧コスト", "復旧要員数", "復旧手順数"],
        0,
        "RTO（Recovery Time Objective）は災害発生から復旧完了までの目標時間です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "システムの「RPO」が示すものは何ですか？",
        ["復旧時間", "データ損失許容時間", "復旧費用", "復旧人数"],
        1,
        "RPO（Recovery Point Objective）は災害時に許容できるデータ損失の時間範囲です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "運用手順書に含むべき内容でないものはどれですか？",
        ["操作手順", "トラブル対応", "連絡先", "個人的な感想"],
        3,
        "個人的な感想は運用手順書には不適切です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "Change管理の目的として正しいものはどれですか？",
        ["変更の迅速化", "変更リスクの管理と統制", "変更費用の削減", "変更作業の自動化"],
        1,
        "Change管理は変更によるリスクを管理し、サービスへの悪影響を防ぐことが目的です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "システム性能劣化の原因として考えにくいものはどれですか？",
        ["メモリリーク", "ディスク断片化", "ログファイル肥大化", "マウスの色"],
        3,
        "マウスの色はシステム性能に影響しません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "ログローテーションの目的は何ですか？",
        ["ログ内容の暗号化", "ディスク容量の管理", "ログの高速化", "ログの削除"],
        1,
        "ログローテーションは古いログファイルを分割・削除してディスク容量を管理します。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "運用監視で「アラート疲れ」とは何ですか？",
        ["機器の疲労", "頻繁なアラートによる運用者の麻痺状態", "電力消費過多", "処理速度低下"],
        1,
        "過度に多いアラートにより、重要な警告を見逃しやすくなる状態をアラート疲れと呼びます。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "サーバーリソース監視で確認すべき項目でないものはどれですか？",
        ["CPU使用率", "メモリ使用率", "ディスクI/O", "天気予報"],
        3,
        "天気予報はサーバーリソース監視項目ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "自動化ツールの導入効果として期待できないものはどれですか？",
        ["人的ミス削減", "作業時間短縮", "品質向上", "創造性向上"],
        3,
        "自動化は定型作業を効率化しますが、創造性を直接向上させるものではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンフィギュレーション管理の対象でないものはどれですか？",
        ["ハードウェア構成", "ソフトウェア設定", "ネットワーク設定", "社員の趣味"],
        3,
        "社員の趣味はIT資産管理の対象ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "IT資産管理で追跡すべき情報でないものはどれですか？",
        ["ハードウェア仕様", "ソフトウェアライセンス", "保守契約", "利用者の血液型"],
        3,
        "血液型は資産管理で追跡する情報ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "パフォーマンス分析で「ボトルネック」とは何ですか？",
        ["最高性能部分", "性能制限要因", "データ保存場所", "設定ファイル"],
        1,
        "ボトルネックはシステム全体の性能を制限している要因（CPU、メモリ、ディスクなど）です。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "システム移行時の並行運用期間の目的は何ですか？",
        ["コスト削減", "新システムの動作確認", "旧システム廃棄", "人員削減"],
        1,
        "並行運用は新システムが安定動作することを確認し、リスクを軽減するために行います。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウド移行時の課題として考えにくいものはどれですか？",
        ["データ移行", "セキュリティ確保", "コスト管理", "机の配置"],
        3,
        "机の配置はクラウド移行の技術的課題ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "運用自動化の段階で最も高度なレベルは何ですか？",
        ["手動操作", "スクリプト化", "ワークフロー自動化", "自己修復システム"],
        3,
        "自己修復システムは問題を自動検知し、人間の介入なしに修復を行う最も高度な自動化レベルです。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Advanced
    ),
    new Question(
        "DevOpsの「CI/CD」で期待される効果でないものはどれですか？",
        ["リリース頻度向上", "品質向上", "デプロイ時間短縮", "電気代削減"],
        3,
        "電気代削減はCI/CDの直接的な効果ではありません。",
        QuestionCategory.OperatingSystems,
        DifficultyLevel.Basic
    ),
    new Question(
        "配列（Array）の特徴として正しいものはどれですか？",
        ["サイズ可変", "連続メモリ配置", "挿入削除が高速", "順序なし"],
        1,
        "配列は連続したメモリ領域に要素を格納し、インデックスで高速アクセスできます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "スタック（Stack）のデータ取得順序は何ですか？",
        ["FIFO（先入先出）", "LIFO（後入先出）", "ランダム", "優先度順"],
        1,
        "スタックはLIFO（Last In, First Out）方式で、最後に追加された要素が最初に取り出されます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "キュー（Queue）の主な操作でないものはどれですか？",
        ["enqueue（追加）", "dequeue（取出）", "peek（先頭確認）", "sort（並び替え）"],
        3,
        "ソートはキューの基本操作ではありません。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "連結リスト（Linked List）の利点は何ですか？",
        ["高速ランダムアクセス", "動的サイズ変更", "メモリ効率", "並び替え不要"],
        1,
        "連結リストは実行時に動的にサイズを変更でき、メモリを効率的に使用できます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハッシュテーブルの主な利点は何ですか？",
        ["メモリ節約", "平均O(1)での検索", "順序保証", "重複許可"],
        1,
        "ハッシュテーブルは適切なハッシュ関数により平均的にO(1)時間での検索が可能です。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "二分木（Binary Tree）の各ノードが持つ子ノードの最大数は？",
        ["1個", "2個", "3個", "無制限"],
        1,
        "二分木では各ノードは最大2個の子ノード（左の子と右の子）を持ちます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "ヒープ（Heap）の性質として正しいものはどれですか？",
        ["完全順序", "親が子より大きい（または小さい）", "循環構造", "固定サイズ"],
        1,
        "ヒープは親ノードが子ノードより大きい（最大ヒープ）または小さい（最小ヒープ）性質を持ちます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "グラフ構造で「辺（エッジ）」とは何ですか？",
        ["頂点の数", "ノード間の接続", "データの値", "グラフの種類"],
        1,
        "辺（エッジ）は2つの頂点（ノード）を結ぶ接続を表します。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "優先度付きキューで使用される典型的なデータ構造は何ですか？",
        ["配列", "ヒープ", "スタック", "ハッシュテーブル"],
        1,
        "優先度付きキューは通常ヒープ構造を使用して効率的に実装されます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "双方向連結リストの利点として正しくないものはどれですか？",
        ["前後方向への移動", "削除操作の効率化", "メモリ使用量削減", "柔軟な挿入"],
        2,
        "双方向連結リストは前と次への2つのポインタを持つため、単方向よりメモリを多く使用します。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "バブルソートの時間計算量（最悪の場合）は何ですか？",
        ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        2,
        "バブルソートは最悪の場合（逆順）にO(n²)の時間計算量を持ちます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "クイックソートが最悪の性能を示すのはどのような場合ですか？",
        ["ランダムデータ", "既にソート済み", "すべて同じ値", "部分的にソート済み"],
        1,
        "クイックソートは既にソートされたデータや逆順データで最悪O(n²)の性能になることがあります。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "マージソートの特徴として正しいものはどれですか？",
        ["不安定ソート", "インプレースソート", "分割統治法", "O(n²)時間"],
        2,
        "マージソートは分割統治法を使用し、常にO(n log n)の時間計算量を保証します。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ヒープソートで使用されるデータ構造は何ですか？",
        ["二分探索木", "ヒープ", "ハッシュテーブル", "連結リスト"],
        1,
        "ヒープソートはヒープ構造を使用してO(n log n)でソートを行います。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "挿入ソートが効率的なのはどのような場合ですか？",
        ["大量データ", "ランダムデータ", "小さなデータまたは部分的ソート済み", "逆順データ"],
        2,
        "挿入ソートは小さなデータセットや部分的にソートされたデータに対して効率的です。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "選択ソートの動作原理は何ですか？",
        ["隣接要素の交換", "最小値を選択して配置", "分割して統合", "ピボットで分割"],
        1,
        "選択ソートは未ソート部分から最小値を選択し、ソート済み部分の末尾に配置します。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "安定ソートの特徴は何ですか？",
        ["高速性", "同じ値の相対位置保持", "メモリ効率", "単純性"],
        1,
        "安定ソートは同じキー値を持つ要素の相対的な順序をソート後も保持します。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "基数ソート（Radix Sort）の特徴は何ですか？",
        ["比較ベース", "非比較ベース", "O(n²)時間", "不安定"],
        1,
        "基数ソートは要素を比較せず、桁ごとに分類することでソートする非比較ベースアルゴリズムです。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "シェルソートの改良点は何ですか？",
        ["挿入ソートの改良", "バブルソートの改良", "選択ソートの改良", "マージソートの改良"],
        0,
        "シェルソートは挿入ソートを改良し、間隔を空けた要素から順次ソートしていきます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ソートアルゴリズムの「外部ソート」とは何ですか？",
        ["他のプログラムでソート", "メモリに収まらないデータのソート", "ネットワーク経由ソート", "並列ソート"],
        1,
        "外部ソートは主メモリに収まらない大量データを補助記憶装置を使ってソートする手法です。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Advanced
    ),
    new Question(
        "線形探索（Linear Search）の時間計算量は何ですか？",
        ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        2,
        "線形探索は最悪の場合、すべての要素を順次調べるためO(n)の時間がかかります。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "二分探索（Binary Search）が適用できる条件は何ですか？",
        ["データが任意順序", "データがソート済み", "データが重複なし", "データが正の値"],
        1,
        "二分探索はソート済みのデータに対してのみ適用でき、O(log n)で検索できます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハッシュ探索でコリジョン（衝突）が発生する原因は何ですか？",
        ["メモリ不足", "異なるキーが同じハッシュ値", "データの重複", "配列サイズ不足"],
        1,
        "異なるキーが同じハッシュ値を生成するとコリジョンが発生します。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "深さ優先探索（DFS）で使用されるデータ構造は何ですか？",
        ["キュー", "スタック", "ヒープ", "ハッシュテーブル"],
        1,
        "DFSは明示的または再帰的にスタック構造を使用して実装されます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "幅優先探索（BFS）で使用されるデータ構造は何ですか？",
        ["スタック", "キュー", "ヒープ", "配列"],
        1,
        "BFSはキュー構造を使用して、同じレベルのノードを先に探索します。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "二分探索木（BST）の探索時間計算量（平均的）は何ですか？",
        ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        1,
        "バランスの取れた二分探索木では平均的にO(log n)で探索できます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "A*アルゴリズムの用途は何ですか？",
        ["ソート", "最短経路探索", "パターンマッチング", "数値計算"],
        1,
        "A*アルゴリズムはヒューリスティック関数を使用した効率的な最短経路探索アルゴリズムです。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ダイクストラ法の制約は何ですか？",
        ["非連結グラフ", "負の重みを持つ辺", "有向グラフ", "重み付きグラフ"],
        1,
        "ダイクストラ法は負の重みを持つ辺があるグラフでは正しく動作しません。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Advanced
    ),
    new Question(
        "文字列探索のKMPアルゴリズムの利点は何ですか？",
        ["メモリ効率", "マッチ失敗時のバックトラック削減", "実装の簡単さ", "全文検索"],
        1,
        "KMP（Knuth-Morris-Pratt）アルゴリズムは失敗関数により無駄なバックトラックを避けます。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ブルームフィルタ（Bloom Filter）の特徴は何ですか？",
        ["完全な検索", "偽陽性あり・偽陰性なし", "大容量必要", "完全な削除可能"],
        1,
        "ブルームフィルタは省メモリで高速ですが、偽陽性（false positive）が発生する可能性があります。",
        QuestionCategory.DataStructuresAlgorithms,
        DifficultyLevel.Advanced
    ),
    new Question(
        "iOSアプリ開発で使用される主要な開発言語は何ですか？",
        ["Java", "Swift", "Python", "C#"],
        1,
        "SwiftはAppleが開発したiOSアプリ開発のための主要なプログラミング言語です。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Xcodeとは何ですか？",
        ["プログラミング言語", "統合開発環境", "テストフレームワーク", "配布プラットフォーム"],
        1,
        "XcodeはAppleが提供するiOS/macOS開発用の統合開発環境（IDE）です。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "iOSアプリのユーザーインターフェース作成に使用されるフレームワークは何ですか？",
        ["Foundation", "UIKit", "Core Data", "AVFoundation"],
        1,
        "UIKitはiOSアプリのユーザーインターフェース要素を提供するフレームワークです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "SwiftUIの特徴として正しいものはどれですか？",
        ["宣言的UI記述", "手続き型UI記述", "Objective-C専用", "Android対応"],
        0,
        "SwiftUIは宣言的な構文でユーザーインターフェースを記述できる最新のフレームワークです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "iOSアプリのアプリストア配布に必要なものは何ですか？",
        ["Google Play Console", "Apple Developer Program", "Microsoft Store", "GitHub Account"],
        1,
        "App Storeでアプリを配布するにはApple Developer Programへの登録が必要です。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Core Dataの用途は何ですか？",
        ["ネットワーク通信", "データ永続化", "UI描画", "音声処理"],
        1,
        "Core DataはiOSアプリでデータの永続化を行うためのフレームワークです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "iOSアプリのライフサイクルメソッド「viewDidLoad」の呼ばれるタイミングは？",
        ["アプリ起動時", "ビュー表示直前", "ビューのメモリ読み込み完了後", "ビュー非表示時"],
        2,
        "viewDidLoadはビューコントローラーのビューがメモリに読み込まれた後に一度だけ呼ばれます。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Auto Layoutの目的は何ですか？",
        ["処理の自動化", "デバイス対応のレイアウト", "自動ビルド", "自動テスト"],
        1,
        "Auto Layoutは異なる画面サイズのデバイスに対応する柔軟なレイアウトシステムです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "iOSアプリでバックグラウンド処理を実装する際の制約は何ですか？",
        ["制約なし", "システムによる時間制限", "メモリ無制限", "CPU使用率無制限"],
        1,
        "iOSはバッテリー寿命とパフォーマンス保護のため、バックグラウンド処理に時間制限を設けています。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Objective-Cの特徴として正しくないものはどれですか？",
        ["C言語の拡張", "動的型付け", "メッセージパッシング", "現代的な構文"],
        3,
        "Objective-Cは古いiOS開発言語で、Swiftと比べて構文が古く複雑です。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Android開発で使用される主要な開発言語は何ですか？",
        ["Swift", "Kotlin", "C#", "JavaScript"],
        1,
        "KotlinはGoogleが推奨するAndroid開発のための主要言語です（従来はJava）。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Android Studioとは何ですか？",
        ["プログラミング言語", "公式統合開発環境", "エミュレータ", "配布プラットフォーム"],
        1,
        "Android StudioはGoogleが提供するAndroid開発用の公式IDEです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Androidアプリの基本コンポーネントでないものはどれですか？",
        ["Activity", "Service", "Broadcast Receiver", "UIKit"],
        3,
        "UIKitはiOSのフレームワークで、Androidのコンポーネントではありません。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Android Manifestファイルの役割は何ですか？",
        ["UI定義", "アプリの設定・権限定義", "ソースコード", "画像リソース"],
        1,
        "Android Manifestはアプリの基本情報、コンポーネント、権限を定義するファイルです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Jetpack Composeの特徴は何ですか？",
        ["XML ベースUI", "宣言的UI開発", "ネットワーク機能", "データベース機能"],
        1,
        "Jetpack Composeは宣言的な構文でUIを記述できるAndroidの最新UIツールキットです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Androidアプリでデータを永続化する方法でないものはどれですか？",
        ["SharedPreferences", "Room Database", "File Storage", "Core Data"],
        3,
        "Core DataはiOSのデータ永続化フレームワークで、Androidでは使用できません。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Intentの用途は何ですか？",
        ["UI描画", "コンポーネント間の通信", "データ暗号化", "ネットワーク接続"],
        1,
        "IntentはAndroidでActivity間やコンポーネント間でのデータ受け渡しや機能呼び出しに使用されます。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Androidアプリの権限システムの目的は何ですか？",
        ["処理速度向上", "ユーザープライバシー保護", "メモリ効率化", "バッテリー節約"],
        1,
        "権限システムはユーザーのプライバシーとセキュリティを保護するため、アプリの機能を制限します。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "RecyclerViewの用途は何ですか？",
        ["データ保存", "効率的なリスト表示", "ネットワーク通信", "ファイル読み込み"],
        1,
        "RecyclerViewは大量のデータを効率的にリスト表示するためのAndroidUIコンポーネントです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "APKファイルとは何ですか？",
        ["ソースコード", "Android アプリケーションパッケージ", "設定ファイル", "データベース"],
        1,
        "APK（Android Package）はAndroidアプリの配布・インストール用パッケージファイルです。",
        QuestionCategory.MobileAppDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "標的型攻撃の特徴は何ですか？",
        ["無差別攻撃", "特定の組織・個人を狙った攻撃", "自動化された攻撃", "物理的な攻撃"],
        1,
        "標的型攻撃は特定の組織や個人を狙って巧妙に仕掛けられる持続的な攻撃です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ランサムウェアの目的は何ですか？",
        ["データ盗取", "システム破壊", "身代金要求", "スパイ活動"],
        2,
        "ランサムウェアはファイルを暗号化し、復号と引き換えに身代金を要求する悪意のあるソフトウェアです。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "APT（Advanced Persistent Threat）の特徴は何ですか？",
        ["短期間の攻撃", "長期間の潜伏・監視", "単発攻撃", "自動攻撃"],
        1,
        "APTは組織内に長期間潜伏し、継続的に情報収集や破壊活動を行う高度な攻撃です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ソーシャルエンジニアリングとは何ですか？",
        ["技術的攻撃", "人間の心理を悪用した攻撃", "物理的攻撃", "自動化攻撃"],
        1,
        "ソーシャルエンジニアリングは人間の心理的な隙や信頼関係を悪用して情報を入手する攻撃手法です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "DDoS攻撃の「Distributed」が意味するものは何ですか？",
        ["暗号化された", "分散した", "持続的な", "巧妙な"],
        1,
        "DDoS（Distributed Denial of Service）は多数のコンピュータから分散して行われるサービス拒否攻撃です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "ゼロデイ攻撃の特徴は何ですか？",
        ["既知の脆弱性を利用", "未知の脆弱性を利用", "物理的な攻撃", "内部犯行"],
        1,
        "ゼロデイ攻撃は公になっていない（パッチが存在しない）脆弱性を悪用する攻撃です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ボットネット（Botnet）とは何ですか？",
        ["正規のネットワーク", "感染したコンピュータ群", "セキュリティソフト", "暗号化技術"],
        1,
        "ボットネットはマルウェアに感染し、攻撃者に遠隔操作されるコンピュータ群です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "水飲み場攻撃（Watering hole attack）とは何ですか？",
        ["物理的な侵入", "標的がよく訪問するサイトを感染", "水道施設への攻撃", "無線LANへの攻撃"],
        1,
        "水飲み場攻撃は標的がよく利用するWebサイトにマルウェアを仕込む攻撃手法です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "多要素認証（MFA）の「要素」として含まれないものはどれですか？",
        ["知識要素（パスワード）", "所有要素（トークン）", "生体要素（指紋）", "場所要素（GPS）"],
        3,
        "場所は一般的な認証要素ではありません。MFAは知識・所有・生体の3要素を組み合わせます。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイアウォールの「ステートフル検査」とは何ですか？",
        ["パケット内容の暗号化", "通信の状態を追跡した検査", "ユーザー認証", "ウイルススキャン"],
        1,
        "ステートフル検査は通信セッションの状態を追跡し、コンテキストに基づいてパケットを検査します。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "EDR（Endpoint Detection and Response）の主な機能は何ですか？",
        ["ネットワーク監視", "エンドポイントの脅威検知・対応", "データバックアップ", "パスワード管理"],
        1,
        "EDRは各エンドポイント（端末）で高度な脅威を検知し、インシデント対応を支援するソリューションです。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "SIEM（Security Information and Event Management）の目的は何ですか？",
        ["ウイルス駆除", "セキュリティログの統合分析", "暗号化", "アクセス制御"],
        1,
        "SIEMは複数のシステムからセキュリティ関連ログを収集・統合し、脅威を分析・検知します。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "WAF（Web Application Firewall）の保護対象は何ですか？",
        ["ネットワーク全体", "Webアプリケーション", "メールサーバー", "データベース"],
        1,
        "WAFはWebアプリケーション固有の攻撃（SQLインジェクション、XSSなど）から保護します。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル証明書の役割は何ですか？",
        ["データ圧縮", "身元証明と暗号化", "ウイルス検知", "アクセス制御"],
        1,
        "デジタル証明書は公開鍵インフラ（PKI）において身元証明と暗号化通信を可能にします。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハニーポット（Honeypot）の設置目的は何ですか？",
        ["性能向上", "攻撃者の誘導・分析", "データバックアップ", "ユーザー認証"],
        1,
        "ハニーポットは攻撃者を意図的に誘導し、攻撃手法を観察・分析するための囮システムです。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サンドボックス環境の用途は何ですか？",
        ["本番運用", "安全な実行環境でのマルウェア分析", "データ保存", "ネットワーク高速化"],
        1,
        "サンドボックスは隔離された安全な環境で疑わしいファイルやプログラムを実行・分析します。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSIRT（Computer Security Incident Response Team）の役割は何ですか？",
        ["システム開発", "セキュリティインシデント対応", "ネットワーク構築", "ユーザサポート"],
        1,
        "CSIRTはセキュリティインシデントの予防、検知、対応、復旧を専門に行う組織です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタルフォレンジックの目的は何ですか？",
        ["システム高速化", "デジタル証拠の保全・分析", "データバックアップ", "ネットワーク設定"],
        1,
        "デジタルフォレンジックは犯罪捜査や紛争解決のためにデジタル機器から証拠を科学的に収集・分析します。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "インシデント対応の最初の段階は何ですか？",
        ["復旧", "封じ込め", "準備", "根絶"],
        2,
        "NISTフレームワークでは、準備（Plan）がインシデント対応の最初の段階とされています。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "証拠保全で重要な原則は何ですか？",
        ["迅速性", "完全性と真正性", "低コスト", "自動化"],
        1,
        "デジタル証拠は改ざんされておらず（完全性）、確実に本物である（真正性）ことが重要です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "インシデント分析で重要な情報でないものはどれですか？",
        ["攻撃の時系列", "侵害範囲", "攻撃手法", "担当者の趣味"],
        3,
        "担当者の趣味はインシデント分析に必要な情報ではありません。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "GDPR（General Data Protection Regulation）の対象は何ですか？",
        ["米国企業のみ", "EU域内の個人データ処理", "日本企業のみ", "政府機関のみ"],
        1,
        "GDPRは欧州連合の一般データ保護規則で、EU域内の個人データ処理を行うすべての組織が対象です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "個人情報保護法で定める「個人情報」に含まれないものはどれですか？",
        ["氏名", "住所", "メールアドレス", "天気予報"],
        3,
        "天気予報は特定の個人を識別できる情報ではありません。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "ISO 27001の主な目的は何ですか？",
        ["品質管理", "情報セキュリティ管理システム", "環境管理", "財務管理"],
        1,
        "ISO 27001は組織の情報セキュリティ管理システム（ISMS）の要求事項を定めた国際規格です。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データ侵害通知の一般的な期限はどれくらいですか？",
        ["24時間以内", "72時間以内", "1週間以内", "1ヶ月以内"],
        1,
        "GDPRでは個人データ侵害を72時間以内に監督当局に通知することが義務付けられています。",
        QuestionCategory.Cybersecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "記述統計と推測統計の違いは何ですか？",
        ["計算方法", "データの記述 vs 母集団の推定", "使用ソフト", "データ量"],
        1,
        "記述統計はデータの特徴を要約し、推測統計は標本から母集団の特性を推定します。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "標準偏差が表すものは何ですか？",
        ["データの中央値", "データのばらつき", "データの最大値", "データの合計"],
        1,
        "標準偏差はデータが平均値からどの程度散らばっているかを示す指標です。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "中央値（メディアン）の特徴は何ですか？",
        ["外れ値の影響を受けやすい", "外れ値の影響を受けにくい", "常に平均値と等しい", "常に最頻値と等しい"],
        1,
        "中央値は外れ値の影響を受けにくく、頑健な統計量として知られています。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "相関係数の範囲は何ですか？",
        ["0から1", "-1から0", "-1から1", "0から無限大"],
        2,
        "相関係数は-1（完全な負の相関）から1（完全な正の相関）の範囲の値を取ります。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "正規分布の特徴として正しくないものはどれですか？",
        ["左右対称", "平均=中央値=最頻値", "68-95-99.7ルール", "常に一様分布"],
        3,
        "正規分布は一様分布ではなく、中央付近の値の頻度が高い釣り鐘型の分布です。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "p値（p-value）が示すものは何ですか？",
        ["効果の大きさ", "帰無仮説が真の時に観察された結果以上が起こる確率", "標本サイズ", "相関の強さ"],
        1,
        "p値は帰無仮説が正しいという前提で、観察されたデータ以上に極端な結果が得られる確率です。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "第一種過誤（Type I Error）とは何ですか？",
        ["真の仮説を棄却", "偽の仮説を採択", "データ入力ミス", "計算間違い"],
        0,
        "第一種過誤は帰無仮説が真であるにも関わらず、それを棄却してしまう誤りです。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "信頼区間の意味として正しいものはどれですか？",
        ["母数が含まれる確率的範囲", "データの分布範囲", "予測の精度", "標本の大きさ"],
        0,
        "信頼区間は一定の信頼度で母数（母集団のパラメータ）が含まれると期待される範囲です。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データクリーニングの目的は何ですか？",
        ["データ量の削減", "データ品質の向上", "処理速度の向上", "コストの削減"],
        1,
        "データクリーニングは欠損値、外れ値、重複などを処理してデータ品質を向上させます。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "外れ値（Outlier）の検出方法でないものはどれですか？",
        ["箱ひげ図", "Zスコア", "IQR（四分位範囲）", "平均値"],
        3,
        "平均値自体は外れ値検出手法ではありません。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "ヒストグラムで確認できる情報は何ですか？",
        ["データの分布", "相関関係", "時系列変化", "因果関係"],
        0,
        "ヒストグラムはデータの分布の形状、中心、散らばりを視覚的に確認できます。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "散布図で確認できる情報は何ですか？",
        ["データの分布", "2変数間の関係", "時系列トレンド", "カテゴリ別集計"],
        1,
        "散布図は2つの連続変数間の関係性（相関など）を視覚的に確認できます。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "欠損値処理の方法でないものはどれですか？",
        ["除去", "平均値補完", "回帰補完", "データ暗号化"],
        3,
        "暗号化は欠損値処理の手法ではありません。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "時系列データの特徴でないものはどれですか？",
        ["トレンド", "季節性", "周期性", "独立性"],
        3,
        "時系列データは時間的順序があり、隣接するデータ点は通常独立ではありません。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "主成分分析（PCA）の目的は何ですか？",
        ["分類", "次元削減", "クラスタリング", "予測"],
        1,
        "PCAは高次元データを低次元に変換し、情報の損失を最小化しながら次元削減を行います。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "A/Bテストの目的は何ですか？",
        ["データ可視化", "2つの施策の効果比較", "予測精度向上", "異常検知"],
        1,
        "A/Bテストは2つの異なる施策やデザインの効果を統計的に比較検証する手法です。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "教師あり学習と教師なし学習の違いは何ですか？",
        ["アルゴリズムの違い", "正解ラベルの有無", "データ量の違い", "計算速度の違い"],
        1,
        "教師あり学習は正解ラベル付きデータで学習し、教師なし学習はラベルなしデータからパターンを発見します。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "オーバーフィッティング（過学習）の対策でないものはどれですか？",
        ["正則化", "クロスバリデーション", "データ増強", "学習率増加"],
        3,
        "学習率を単純に増加させることは過学習の対策にはなりません。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "決定木アルゴリズムの利点は何ですか？",
        ["高い予測精度", "解釈しやすさ", "高速処理", "少ないメモリ使用"],
        1,
        "決定木は分岐ルールが明確で、人間が理解しやすい解釈可能なモデルです。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "ランダムフォレストの特徴は何ですか？",
        ["単一決定木", "複数決定木のアンサンブル", "線形モデル", "ニューラルネットワーク"],
        1,
        "ランダムフォレストは複数の決定木を組み合わせて予測精度を向上させるアンサンブル手法です。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "k-meansクラスタリングで事前に決める必要があるものは何ですか？",
        ["データ数", "クラスタ数", "特徴量数", "計算時間"],
        1,
        "k-meansアルゴリズムでは、事前にクラスタ数kを指定する必要があります。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "精度（Accuracy）の計算式は何ですか？",
        ["TP/(TP+FP)", "(TP+TN)/(TP+TN+FP+FN)", "TP/(TP+FN)", "TN/(TN+FP)"],
        1,
        "精度は正しく予測した数を全予測数で割った値：(TP+TN)/(TP+TN+FP+FN)",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "交差検証（Cross Validation）の目的は何ですか？",
        ["学習速度向上", "モデル性能の信頼性評価", "データ量増加", "特徴量選択"],
        1,
        "交差検証はデータを分割して複数回学習・評価を行い、モデル性能の信頼性を評価します。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "特徴量選択の目的でないものはどれですか？",
        ["計算効率向上", "過学習抑制", "解釈性向上", "データ量増加"],
        3,
        "特徴量選択はデータ量を増加させるのではなく、重要な特徴量を選んで次元を削減します。",
        QuestionCategory.DataScience,
        DifficultyLevel.Basic
    ),
    new Question(
        "ニューラルネットワークの「活性化関数」の役割は何ですか？",
        ["重み初期化", "非線形性の導入", "誤差計算", "学習率調整"],
        1,
        "活性化関数は非線形性を導入し、ニューラルネットワークが複雑なパターンを学習できるようにします。",
        QuestionCategory.DataScience,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ゲームエンジンの主な機能でないものはどれですか？",
        ["物理演算", "レンダリング", "音声処理", "会計処理"],
        3,
        "会計処理はゲームエンジンの機能ではありません。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "Unity で使用される主要なプログラミング言語は何ですか？",
        ["Java", "C#", "Python", "Swift"],
        1,
        "UnityではC#がメインのプログラミング言語として使用されます。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "ゲームループの基本構成に含まれないものはどれですか？",
        ["入力処理", "更新処理", "描画処理", "データベース処理"],
        3,
        "データベース処理は一般的なゲームループの基本構成には含まれません。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "FPS（Frames Per Second）が表すものは何ですか？",
        ["音の品質", "1秒間に描画されるフレーム数", "ファイルサイズ", "プレイヤー数"],
        1,
        "FPSは1秒間に描画される画面フレーム数で、ゲームの滑らかさを表す指標です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "ゲーム開発の「アセット」とは何ですか？",
        ["プログラムコード", "ゲームで使用するリソース", "プレイヤーデータ", "設計書"],
        1,
        "アセットは画像、音声、3Dモデルなどゲームで使用するリソースファイルの総称です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "ゲームオブジェクトの「コンポーネント」システムの利点は何ですか？",
        ["処理速度向上", "機能の組み合わせによる柔軟性", "メモリ削減", "グラフィック向上"],
        1,
        "コンポーネントシステムは機能を小さな部品に分割し、組み合わせて柔軟にオブジェクトを構成できます。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ゲーム開発の「プロトタイピング」の目的は何ですか？",
        ["最終製品の作成", "アイデアの検証", "バグの修正", "販売戦略立案"],
        1,
        "プロトタイピングはゲームのコアアイデアや面白さを早期に検証するための試作です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "3Dモデルの「ポリゴン」とは何ですか？",
        ["色の情報", "3つ以上の頂点で構成される面", "テクスチャ", "アニメーション"],
        1,
        "ポリゴンは3つ以上の頂点で構成される多角形の面で、3Dモデルを構成する基本要素です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "テクスチャマッピングの目的は何ですか？",
        ["形状変更", "表面の色や模様の付与", "物理演算", "音響効果"],
        1,
        "テクスチャマッピングは3Dモデルの表面に2D画像を貼り付けて色や模様を表現する技術です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "シェーダーの役割は何ですか？",
        ["物理演算", "レンダリング処理のプログラム", "音声処理", "入力処理"],
        1,
        "シェーダーはGPU上で実行されるレンダリング処理を制御するプログラムです。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "LOD（Level of Detail）技術の目的は何ですか？",
        ["グラフィック品質向上", "パフォーマンス最適化", "音質向上", "操作性向上"],
        1,
        "LODは距離に応じてモデルの詳細度を変更し、レンダリング性能を最適化する技術です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "法線マッピング（Normal Mapping）の効果は何ですか？",
        ["ポリゴン数増加", "少ないポリゴンで凹凸表現", "色の変更", "サイズ調整"],
        1,
        "法線マッピングは少ないポリゴンで表面の凹凸感を表現し、詳細な見た目を実現します。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Advanced
    ),
    new Question(
        "アンチエイリアシングの目的は何ですか？",
        ["色の鮮明化", "エッジのギザギザ軽減", "速度向上", "容量削減"],
        1,
        "アンチエイリアシングは線や輪郭のギザギザ（ジャギー）を滑らかにする技術です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "レイトレーシングが可能にするものは何ですか？",
        ["高速レンダリング", "物理的に正確な光の表現", "ポリゴン数削減", "メモリ節約"],
        1,
        "レイトレーシングは光の物理的な挙動をシミュレートし、リアルな反射や屈折を表現します。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Advanced
    ),
    new Question(
        "物理エンジンが処理する要素でないものはどれですか？",
        ["重力", "衝突判定", "摩擦", "プレイヤー感情"],
        3,
        "プレイヤーの感情は物理エンジンでは処理しません。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "コリジョン（衝突）判定の最適化手法でないものはどれですか？",
        ["空間分割", "バウンディングボックス", "詳細判定の段階化", "テクスチャ圧縮"],
        3,
        "テクスチャ圧縮はコリジョン判定の最適化とは無関係です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ゲームAIの「パスファインディング」とは何ですか？",
        ["プレイヤー追跡", "経路探索", "アニメーション制御", "音声認識"],
        1,
        "パスファインディングはAIキャラクターが目的地までの最適な経路を見つける技術です。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "A*アルゴリズムがゲーム開発で使用される場面は何ですか？",
        ["画像処理", "経路探索", "音声合成", "物理演算"],
        1,
        "A*アルゴリズムはゲームでNPCの最適な移動経路を計算するために使用されます。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "リジッドボディ（Rigid Body）の特徴は何ですか？",
        ["変形可能", "変形しない物体", "透明な物体", "重量がない物体"],
        1,
        "リジッドボディは変形しない固い物体として物理演算で扱われるオブジェクトです。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Basic
    ),
    new Question(
        "ゲームAIの「ステートマシン」の用途は何ですか？",
        ["グラフィック処理", "キャラクターの行動制御", "音声処理", "ネットワーク通信"],
        1,
        "ステートマシンはAIキャラクターの状態（待機、攻撃、逃走など）と状態遷移を管理します。",
        QuestionCategory.GameDevelopment,
        DifficultyLevel.Intermediate
    ),

    // 情報倫理・法律分野の問題（20問）
    new Question(
        "個人情報保護法において、個人情報取扱事業者が個人情報を第三者提供する際に必要なものは何ですか？",
        ["本人の同意", "法定代理人の同意", "監督官庁の許可", "業界団体の承認"],
        0,
        "個人情報保護法では、原則として本人の同意なしに個人情報を第三者に提供することはできません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "著作権法において、プログラムの著作物として保護されるのはどれですか？",
        ["アルゴリズム", "ソースコード", "アイデア", "仕様書"],
        1,
        "プログラムの著作物として保護されるのは具体的に表現されたソースコードです。アルゴリズムやアイデア自体は保護されません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "不正アクセス禁止法で禁止されている行為はどれですか？",
        ["パスワードの作成", "ログイン画面の表示", "他人のIDとパスワードで不正ログイン", "セキュリティソフトの導入"],
        2,
        "不正アクセス禁止法では、他人の識別符号（IDとパスワード）を用いた不正なアクセスが禁止されています。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報セキュリティにおける「機密性」「完全性」「可用性」をまとめて何と呼びますか？",
        ["CIA", "FBI", "NSA", "ISO"],
        0,
        "情報セキュリティの3要素「機密性（Confidentiality）」「完全性（Integrity）」「可用性（Availability）」の頭文字をとってCIAと呼びます。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンピュータウイルスを作成・提供する行為を規制する法律はどれですか？",
        ["刑法", "個人情報保護法", "不正アクセス禁止法", "著作権法"],
        0,
        "ウイルス作成・提供行為は刑法で「不正指令電磁的記録作成等罪」として処罰されます。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "企業が従業員のメール監視を行う際に配慮すべき法的観点はどれですか？",
        ["売上向上", "プライバシー権", "業務効率", "コスト削減"],
        1,
        "従業員のメール監視は必要最小限に留め、プライバシー権を尊重する必要があります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ソフトウェアライセンスのうち、ソースコードの公開義務があるのはどれですか？",
        ["プロプライエタリライセンス", "GPL（General Public License）", "フリーウェア", "シェアウェア"],
        1,
        "GPL（一般公衆利用許諾）では、改変したソフトウェアを配布する際にソースコードの公開が義務付けられています。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "インターネット上での誹謗中傷に関する法的責任として正しいものはどれですか？",
        ["民事責任のみ", "刑事責任のみ", "民事・刑事両方の責任", "責任は問われない"],
        2,
        "誹謗中傷は名誉毀損罪（刑事責任）と損害賠償責任（民事責任）の両方が問われる可能性があります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Cookie（クッキー）の使用について、GDPR（EU一般データ保護規則）で求められるのは何ですか？",
        ["無制限な使用", "事前の明示的同意", "事後の報告", "自動的な削除"],
        1,
        "GDPRでは、必須でないCookieの使用には事前の明示的な同意が必要です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ソーシャルエンジニアリング攻撃の特徴はどれですか？",
        ["技術的な脆弱性を突く", "人間の心理を突く", "ハードウェアを物理的に破壊", "ネットワーク機器を停止"],
        1,
        "ソーシャルエンジニアリングは技術ではなく人間の心理的な隙や信頼関係を悪用する攻撃手法です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル・ディバイドとは何を意味しますか？",
        ["デジタル機器の故障", "情報通信技術の利用格差", "デジタルデータの分割", "コンピュータウイルス"],
        1,
        "デジタル・ディバイドは、情報通信技術にアクセスできる人とできない人の間の格差を指します。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "AI倫理において問題となる「アルゴリズムバイアス」とは何ですか？",
        ["処理速度の遅延", "特定集団への差別的判断", "データ容量の不足", "計算精度の低下"],
        1,
        "アルゴリズムバイアスは、AIシステムが特定の人種、性別、年齢等に対して不公平な判断を行うことです。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "テレワーク時の情報セキュリティ対策として適切でないものはどれですか？",
        ["VPN接続の使用", "パブリックWi-Fiでの業務", "画面の覗き見防止", "定期的なパスワード変更"],
        1,
        "パブリックWi-Fiは暗号化されていない場合が多く、機密情報の送受信には適しません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "EU諸国からの個人データ移転に関する法的枠組みはどれですか？",
        ["CCPA", "GDPR", "HIPAA", "SOX法"],
        1,
        "GDPR（EU一般データ保護規則）は、EU域内の個人データの処理と移転に関する包括的な法規制です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "インターネット上の表現の自由と規制のバランスで重要な概念はどれですか？",
        ["無制限の自由", "完全な規制", "自己規制と法的規制の両立", "政府による一元管理"],
        2,
        "表現の自由を保障しつつ、有害な情報から社会を守るため、自己規制と法的規制の適切なバランスが重要です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "企業の情報開示における「適時開示」の意義は何ですか？",
        ["コスト削減", "投資家の投資判断材料の提供", "従業員のモチベーション向上", "競合他社への牽制"],
        1,
        "適時開示は、投資家が適切な投資判断を行えるよう、重要な情報を遅滞なく公開することです。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "匿名化された個人データの取り扱いで注意すべき点は何ですか？",
        ["完全に安全", "再識別のリスク", "法的制約なし", "自由な商用利用"],
        1,
        "匿名化されたデータでも、他のデータと組み合わせることで個人が特定される再識別のリスクがあります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サイバー攻撃を受けた企業の法的対応として適切なものはどれですか？",
        ["隠蔽する", "速やかに関係機関に報告", "様子を見る", "攻撃者に報復する"],
        1,
        "サイバー攻撃を受けた場合、被害拡大防止と法的義務履行のため、速やかに警察や監督官庁に報告する必要があります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "オープンソースソフトウェアの利用において注意すべきライセンス条項はどれですか？",
        ["使用期間の制限", "ユーザー数の制限", "改変時の公開義務", "商用利用の禁止"],
        2,
        "多くのオープンソースライセンスでは、ソフトウェアを改変して配布する際にソースコードの公開が義務付けられています。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの監査において重要な「内部統制」の目的は何ですか？",
        ["売上の向上", "リスク管理と法令遵守", "システムの高速化", "コストの削減"],
        1,
        "内部統制は、業務の有効性・効率性、財務報告の信頼性、法令遵守、資産の保全を目的とします。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),

    // 情報倫理・法律 追加問題（目標42問達成のため12問追加）
    new Question(
        "デジタル署名の法的な証拠力を高めるために重要な要素はどれですか？",
        ["電子証明書の利用", "ファイルサイズの最適化", "処理速度の向上", "グラフィックデザイン"],
        0,
        "デジタル署名の法的証拠力を確保するには、信頼できる認証局が発行した電子証明書の利用が重要です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サイバー保険の補償範囲に通常含まれないものはどれですか？",
        ["データ復旧費用", "システム停止による損失", "物理的な設備の火災損害", "法的対応費用"],
        2,
        "サイバー保険は情報セキュリティ関連の損害を補償しますが、物理的な火災損害は一般的な損害保険の対象です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データローカライゼーション要求の主な目的は何ですか？",
        ["処理速度の向上", "国家安全保障とプライバシー保護", "システム互換性の確保", "開発コストの削減"],
        1,
        "データローカライゼーションは、機密データを国内に保管することで国家安全保障とプライバシーを保護する政策です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "企業のコンプライアンス体制で最も重要な要素はどれですか？",
        ["売上向上", "経営陣の関与とトーンセッティング", "システムの自動化", "外部委託の活用"],
        1,
        "効果的なコンプライアンス体制には、経営陣による積極的な関与と倫理的な組織風土の醸成が不可欠です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報システムの内部統制で重要な「統制活動」に含まれないものはどれですか？",
        ["アクセス権限管理", "データバックアップ", "市場調査活動", "変更管理プロセス"],
        2,
        "内部統制の統制活動には、アクセス管理、データ保護、変更管理などが含まれますが、市場調査は直接的な統制活動ではありません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ブロックチェーン技術の法的課題として最も重要なものはどれですか？",
        ["処理速度の遅さ", "データの改ざん不可能性と削除権の競合", "電力消費量", "開発者不足"],
        1,
        "ブロックチェーンの改ざん不可能性は、GDPR等で保障されている削除権（忘れられる権利）と法的に競合する場合があります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "テレワークに関する労働法上の課題として適切でないものはどれですか？",
        ["労働時間の管理", "安全配慮義務", "通信費の企業負担", "業務効率の向上"],
        3,
        "労働法では労働時間管理、安全配慮、経費負担などが課題となりますが、業務効率向上は法的課題ではありません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ゼロトラストセキュリティモデルの法的意義として正しいものはどれですか？",
        ["コスト削減", "継続的な認証による法的責任の明確化", "システム性能の向上", "開発期間の短縮"],
        1,
        "ゼロトラストモデルは継続的な認証・認可により、セキュリティインシデント時の責任範囲を明確化する法的効果があります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "クラウドサービス契約におけるデータ処理の法的責任分担で重要な概念はどれですか？",
        ["シェアードレスポンシビリティモデル", "サーバー仮想化", "負荷分散", "データ圧縮"],
        0,
        "クラウドでは、セキュリティ責任をプロバイダーと利用者で分担するシェアードレスポンシビリティモデルが重要です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "AI自動判断に関するGDPRの規定で保障されている権利はどれですか？",
        ["AI技術の特許権", "自動処理のみによる決定への異議申立権", "AI開発への参加権", "AI利益の配分権"],
        1,
        "GDPRでは、自動処理のみによる意思決定（AI判断等）に対して異議を申し立てる権利が保障されています。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データポータビリティ権の行使において事業者の義務として正しいものはどれですか？",
        ["無制限なデータ提供", "構造化された一般的な形式での提供", "有料でのデータ提供", "競合他社への情報提供拒否"],
        1,
        "データポータビリティ権により、事業者は個人データを構造化され、一般的に使用される機械読み取り可能な形式で提供する義務があります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報セキュリティマネジメントにおける「残留リスク」の適切な対応はどれですか？",
        ["完全な除去", "経営陣による受容判断", "外部への転嫁", "無視"],
        1,
        "残留リスクは完全には除去できないため、そのレベルと影響を評価し、経営陣が受容するかどうかを判断する必要があります。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),

    // 情報倫理・法律 追加問題（パート1）
    new Question(
        "個人情報保護法で定める「個人情報」に該当しないものはどれですか？",
        ["氏名", "生年月日", "統計データ", "住所"],
        2,
        "統計データは個人を特定できない形で加工されているため、個人情報には該当しません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "著作権の保護期間として正しいものはどれですか？",
        ["著作者の死後50年", "著作者の死後70年", "著作者の死後100年", "永続的"],
        1,
        "日本の著作権法では、著作者の死後70年まで著作権が保護されます。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "プライバシーマークの認定を受けるための条件として適切でないものは？",
        ["個人情報保護体制の構築", "従業員の教育実施", "売上高の基準達成", "継続的改善の実施"],
        2,
        "プライバシーマークは個人情報保護に関する認定であり、売上高は認定条件ではありません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル著作権管理（DRM）の主な目的は何ですか？",
        ["ファイルサイズの削減", "著作権侵害の防止", "表示速度の向上", "互換性の確保"],
        1,
        "DRMは、デジタルコンテンツの不正コピーや配布を防ぎ、著作権を保護する技術です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "GDPR（EU一般データ保護規則）で新たに確立された権利に含まれないものは？",
        ["忘れられる権利", "データポータビリティの権利", "アクセス権", "著作権"],
        3,
        "GDPRでは忘れられる権利、データポータビリティ、アクセス権などが確立されましたが、著作権は別の法律で扱われます。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ネットいじめに対する法的対応として適切でないものはどれですか？",
        ["証拠の保全", "関係機関への相談", "加害者への報復", "法的措置の検討"],
        2,
        "ネットいじめには適切な機関への相談や法的措置で対応し、個人的な報復は避けるべきです。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "AIの判断に関する説明責任（Accountability）で重要なことは？",
        ["AIの処理速度", "判断プロセスの透明性", "AIの学習データ量", "AIの開発コスト"],
        1,
        "AI の判断に対する説明責任では、どのような根拠で判断したかの透明性が重要です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ソーシャルメディアでの炎上を防ぐために重要でないことは？",
        ["投稿前の内容確認", "感情的な発言の回避", "フォロワー数の増加", "他者への配慮"],
        2,
        "炎上防止には内容確認、感情コントロール、他者への配慮が重要で、フォロワー数は関係ありません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報セキュリティにおける「ビジネス継続性」で重要な要素は？",
        ["最新技術の導入", "災害時の業務継続計画", "システムの高速化", "コストの削減"],
        1,
        "ビジネス継続性では、災害や障害が発生しても重要な業務を継続できる計画と体制が重要です。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル遺産の管理における課題として適切でないものは？",
        ["アカウントの相続", "データの永続化", "プライバシーの保護", "技術仕様の統一"],
        3,
        "デジタル遺産の課題には相続、永続化、プライバシー保護がありますが、技術仕様の統一は主要な課題ではありません。",
        QuestionCategory.EthicsLegal,
        DifficultyLevel.Advanced
    ),

    // プロジェクト管理・IT管理分野の問題（20問）
    new Question(
        "プロジェクト管理における「スコープ・クリープ」とは何ですか？",
        ["予算の削減", "スケジュールの短縮", "要件の勝手な拡大", "品質の向上"],
        2,
        "スコープ・クリープは、プロジェクト途中で要件が勝手に拡大し、予算や期間に影響を与えることです。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "アジャイル開発手法の特徴として正しいものはどれですか？",
        ["詳細な事前計画", "反復的な開発", "長期間の開発サイクル", "変更の回避"],
        1,
        "アジャイル開発は短期間の反復（イテレーション）を繰り返し、変化に柔軟に対応する開発手法です。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Basic
    ),
    new Question(
        "ITサービス管理のベストプラクティス「ITIL」における「インシデント管理」の目的は何ですか？",
        ["新サービスの開発", "サービス中断の迅速な回復", "予算の管理", "人員の配置"],
        1,
        "インシデント管理は、ITサービスの中断や品質低下を迅速に回復し、ビジネスへの影響を最小化することです。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Advanced
    ),
    new Question(
        "プロジェクトのリスク管理において最初に行うべきことは何ですか？",
        ["リスクの回避", "リスクの識別", "リスクの対応", "リスクの監視"],
        1,
        "リスク管理の第一歩は、プロジェクトに影響を与える可能性のあるリスクを識別することです。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Basic
    ),
    new Question(
        "ガントチャートの主な用途は何ですか？",
        ["予算管理", "品質管理", "スケジュール管理", "人事管理"],
        2,
        "ガントチャートは、プロジェクトのタスクとスケジュールを視覚的に表現する工程管理ツールです。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Basic
    ),
    new Question(
        "DevOpsの主要な目的は何ですか？",
        ["コストの削減", "開発と運用の連携強化", "セキュリティの向上", "ドキュメントの整備"],
        1,
        "DevOpsは開発（Development）と運用（Operations）の壁を取り払い、連携を強化してサービス提供を迅速化します。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SLA（Service Level Agreement）で定義される内容として適切でないものはどれですか？",
        ["可用性", "応答時間", "従業員の給与", "復旧時間"],
        2,
        "SLAはサービスレベルの合意であり、可用性や応答時間などのサービス品質を定義しますが、従業員の給与は含まれません。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "スクラム開発における「スプリント」の典型的な期間はどれですか？",
        ["1日", "1-4週間", "3-6ヶ月", "1年"],
        1,
        "スクラムのスプリントは通常1-4週間（一般的には2週間）の短期間で設定されます。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Basic
    ),
    new Question(
        "変更管理（Change Management）において重要な要素はどれですか？",
        ["変更の自由実行", "影響分析と承認プロセス", "変更の拒否", "変更の隠蔽"],
        1,
        "変更管理では、変更による影響を分析し、適切な承認プロセスを経てから実行することが重要です。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IT資産管理における「ライフサイクル管理」に含まれない段階はどれですか？",
        ["調達", "運用", "廃棄", "営業"],
        3,
        "IT資産のライフサイクルは、調達・導入・運用・保守・廃棄の段階で構成され、営業は含まれません。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Basic
    ),
    new Question(
        "プロジェクト管理の「クリティカルパス」とは何ですか？",
        ["最も重要なタスク", "最長の作業経路", "最短の作業経路", "最も困難なタスク"],
        1,
        "クリティカルパスは、プロジェクト完了までの最長の作業経路で、遅延するとプロジェクト全体が遅延します。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Advanced
    ),
    new Question(
        "災害復旧計画（DRP）における「RTO」は何を表しますか？",
        ["Recovery Time Objective（目標復旧時間）", "Risk Treatment Option", "Real Time Operation", "Resource Transfer Option"],
        0,
        "RTOは目標復旧時間（Recovery Time Objective）で、災害後にシステムやサービスの復旧にかけられる最大時間です。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ITガバナンスの主要フレームワーク「COBIT」の特徴は何ですか？",
        ["技術的な実装方法", "ビジネスとITの整合性", "プログラミング言語", "ハードウェア設計"],
        1,
        "COBITは、ITとビジネスの整合性を図り、IT統治を実現するためのフレームワークです。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Advanced
    ),
    new Question(
        "カンバン方式の視覚管理における「WIP制限」の目的は何ですか？",
        ["作業の増加", "品質の向上", "作業の流れの改善", "コストの増加"],
        2,
        "WIP（Work In Progress）制限は、同時進行する作業量を制限し、作業の流れを改善してボトルネックを見つけやすくします。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ITプロジェクトの品質管理において「テスト駆動開発（TDD）」の利点は何ですか？",
        ["開発速度の向上", "コードの品質向上", "コストの削減", "ドキュメントの自動生成"],
        1,
        "TDDはテストを先に書いてから実装することで、コードの品質向上とリファクタリングの安全性を確保します。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ベンダー管理において重要な「SRM」とは何の略ですか？",
        ["System Resource Management", "Supplier Relationship Management", "Security Risk Management", "Software Release Management"],
        1,
        "SRMはSupplier Relationship Management（サプライヤー関係管理）で、ベンダーとの戦略的パートナーシップを構築・管理します。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Advanced
    ),
    new Question(
        "プロジェクトのステークホルダー管理で最も重要なことは何ですか？",
        ["すべての要求を受け入れる", "コミュニケーションと期待値管理", "ステークホルダーを無視する", "予算を最優先する"],
        1,
        "ステークホルダー管理では、適切なコミュニケーションを通じて期待値を管理し、プロジェクトの成功に向けた協力を得ることが重要です。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IT運用監視における「閾値管理」の目的は何ですか？",
        ["コストの削減", "異常の早期検知", "速度の向上", "容量の増加"],
        1,
        "閾値管理は、システムリソースやパフォーマンスに上限・下限値を設定し、異常を早期に検知するためのものです。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "継続的インテグレーション（CI）の主な目的は何ですか？",
        ["コードの複雑化", "統合問題の早期発見", "開発の分離", "手動テストの増加"],
        1,
        "CIは、開発者が頻繁にコードを統合することで、統合に伴う問題を早期に発見し、修正コストを削減します。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ITサービスの「可用性」を高めるための手法として適切でないものはどれですか？",
        ["冗長化", "負荷分散", "定期メンテナンス", "システムの停止"],
        3,
        "可用性向上のためには、冗長化、負荷分散、定期メンテナンス等が有効ですが、システム停止は可用性を下げます。",
        QuestionCategory.ProjectManagement,
        DifficultyLevel.Basic
    ),

    // ハードウェア・組み込み分野の問題（20問）
    new Question(
        "組み込みシステムの特徴として正しくないものはどれですか？",
        ["リアルタイム性", "低消費電力", "汎用性の高さ", "専用性"],
        2,
        "組み込みシステムは特定の機能に特化した専用システムであり、汎用性よりも専用性が重視されます。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "マイクロコントローラ（MCU）とマイクロプロセッサ（MPU）の主な違いは何ですか？",
        ["処理速度", "価格", "内蔵メモリの有無", "消費電力"],
        2,
        "MCUはCPU、メモリ、I/Oが1チップに統合されているのに対し、MPUは外部メモリが必要です。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Arduino開発において、デジタル入出力ピンの状態を読み取る関数はどれですか？",
        ["analogRead()", "digitalRead()", "pinMode()", "digitalWrite()"],
        1,
        "digitalRead()関数は、指定したデジタルピンの状態（HIGHまたはLOW）を読み取ります。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "IoTデバイスの通信プロトコルとして最も低消費電力なものはどれですか？",
        ["Wi-Fi", "Bluetooth", "LoRaWAN", "Ethernet"],
        2,
        "LoRaWANは長距離・低消費電力のIoT通信プロトコルで、バッテリー駆動デバイスに適しています。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "PWM（Pulse Width Modulation）制御の主な用途は何ですか？",
        ["デジタル通信", "アナログ出力の模擬", "クロック生成", "電源管理"],
        1,
        "PWMはパルス幅を変化させることで、デジタル信号からアナログ的な出力（例：LED調光、モーター制御）を実現します。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "RTOS（Real-Time Operating System）の主な特徴は何ですか？",
        ["高いスループット", "決定論的な応答時間", "豊富なGUI機能", "大容量メモリ管理"],
        1,
        "RTOSは決定論的な応答時間を保証し、リアルタイム要求に確実に応答できることが最重要特徴です。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "センサーの「分解能」とは何を表しますか？",
        ["測定範囲", "測定精度", "最小検出単位", "応答速度"],
        2,
        "分解能は、センサーが検出できる最小の変化量を表し、より細かい変化を検出できるほど分解能が高いとされます。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SPIやI2Cなどのシリアル通信における「クロック同期式」の利点は何ですか？",
        ["低消費電力", "高速通信", "確実なデータ転送", "長距離通信"],
        2,
        "クロック同期式通信では、送信側と受信側が同じクロックを共有するため、データの同期が確実に取れます。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組み込みシステムの電源設計において「レギュレータ」の役割は何ですか？",
        ["電流の増幅", "電圧の安定化", "電力の変換", "ノイズの増加"],
        1,
        "レギュレータは入力電圧の変動に関係なく、安定した出力電圧を供給する電源回路です。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "組み込みシステムの「ハードリアルタイム」システムの特徴は何ですか？",
        ["処理時間は重要でない", "締切を守ることが絶対条件", "高いスループット重視", "ユーザビリティ重視"],
        1,
        "ハードリアルタイムシステムでは、処理の締切を守ることが絶対条件であり、遅延は致命的な結果をもたらします。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "FPGAの主な特徴として正しいものはどれですか？",
        ["プログラム不可", "ハードウェア記述言語で設計", "低消費電力", "安価"],
        1,
        "FPGA（Field-Programmable Gate Array）は、ハードウェア記述言語（HDL）を使用して論理回路を設計・実装できます。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組み込みシステムでの「割り込み処理」の目的は何ですか？",
        ["システムの停止", "イベントへの即座の対応", "消費電力の増加", "処理の複雑化"],
        1,
        "割り込み処理は、外部イベントや条件が発生した際に、現在の処理を中断して優先的に対応する仕組みです。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ウェアラブルデバイスの設計で重要な「BLE」とは何の略ですか？",
        ["Bluetooth Low Energy", "Basic Logic Element", "Battery Life Extension", "Broadband Link Establishment"],
        0,
        "BLE（Bluetooth Low Energy）は、低消費電力のBluetooth通信規格で、ウェアラブルデバイスに広く使用されています。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "組み込みシステムの「看門狗定時器」（Watchdog Timer）の役割は何ですか？",
        ["時刻の管理", "システムの異常検出", "省電力制御", "通信の同期"],
        1,
        "Watchdog Timerは、システムが正常に動作しているかを監視し、異常時には自動的にシステムをリセットします。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "自動車の組み込みシステムで使用される「CAN通信」の特徴は何ですか？",
        ["高速データ転送", "耐ノイズ性", "低コスト", "簡単な配線"],
        1,
        "CAN（Controller Area Network）は、車載環境の電気ノイズに強い差動信号を使用した通信プロトコルです。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組み込みシステムの「フラッシュメモリ」の特徴として正しくないものはどれですか？",
        ["不揮発性", "電気的消去可能", "高速ランダムアクセス", "プログラム保存"],
        2,
        "フラッシュメモリは不揮発性で電気的に消去可能ですが、RAMと比較するとアクセス速度は遅めです。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "センサーネットワークにおける「メッシュトポロジー」の利点は何ですか？",
        ["低コスト", "高い可用性", "簡単な設定", "低消費電力"],
        1,
        "メッシュトポロジーでは、複数の通信経路があるため、一部のノードが故障しても通信を継続できる高い可用性があります。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組み込みシステムの「省電力設計」において「スリープモード」の効果は何ですか？",
        ["処理速度の向上", "バッテリー寿命の延長", "メモリ容量の増加", "通信速度の向上"],
        1,
        "スリープモードでは、不要な回路の動作を停止してバッテリー寿命を延長できます。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Basic
    ),
    new Question(
        "産業用IoTで使用される「エッジコンピューティング」の主な目的は何ですか？",
        ["コストの削減", "レイテンシの低減", "セキュリティの低下", "複雑性の増加"],
        1,
        "エッジコンピューティングは、データ処理をデバイス近くで行うことで、クラウドとの通信遅延を低減します。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "組み込みシステムの「ファームウェア更新」で重要な考慮事項は何ですか？",
        ["更新の高速化", "更新中の電源断対策", "更新の自動化", "更新の頻度増加"],
        1,
        "ファームウェア更新中の電源断は、システムを起動不能にする可能性があるため、ブートローダーやバックアップ機能が重要です。",
        QuestionCategory.HardwareEngineering,
        DifficultyLevel.Advanced
    ),

    // 情報1（高校必修）分野の問題（200問）
    // 1. コンピュータとデジタル情報
    new Question(
        "コンピュータが扱う情報の基本単位は何ですか？",
        ["バイト", "ビット", "キロバイト", "メガバイト"],
        1,
        "ビット（bit）は、0または1の値を持つ情報の最小単位です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "2進数で「1010」を10進数に変換すると何になりますか？",
        ["8", "10", "12", "16"],
        1,
        "1×8 + 0×4 + 1×2 + 0×1 = 10です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "文字コードとして現在最も広く使われているものはどれですか？",
        ["ASCII", "EUC", "UTF-8", "Shift_JIS"],
        2,
        "UTF-8は世界中の文字を表現でき、インターネットで最も使用されている文字コードです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "画像データの色を表現する際、RGB各色を8ビットで表現すると、全体で何色表現できますか？",
        ["256色", "512色", "1024色", "約1677万色"],
        3,
        "8ビット×3色 = 24ビット = 2^24 = 約1677万色です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "音声をデジタル化する際の「サンプリング」とは何ですか？",
        ["音の大きさを測定", "一定時間間隔で音の値を記録", "ノイズを除去", "音質を向上"],
        1,
        "サンプリングは、連続的な音声信号を一定時間間隔で区切って数値化することです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "圧縮ファイル形式のうち、可逆圧縮はどれですか？",
        ["JPEG", "MP3", "ZIP", "MP4"],
        2,
        "ZIPは可逆圧縮形式で、展開すると元のデータと完全に同じになります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "16進数で「FF」を10進数に変換すると何になりますか？",
        ["15", "255", "256", "16"],
        1,
        "F=15なので、15×16 + 15×1 = 255です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データの単位で、1GB（ギガバイト）は約何バイトですか？",
        ["1000バイト", "100万バイト", "10億バイト", "1兆バイト"],
        2,
        "1GB = 10^9バイト = 約10億バイトです（厳密には2^30 = 1,073,741,824バイト）。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル画像の解像度を表す単位はどれですか？",
        ["dpi", "Hz", "bps", "rpm"],
        0,
        "dpi（dots per inch）は、1インチあたりのドット数を表す解像度の単位です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータの「演算装置」に該当するものはどれですか？",
        ["ハードディスク", "メモリ", "CPU", "キーボード"],
        2,
        "CPU（中央処理装置）は、コンピュータの演算と制御を行う装置です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),

    // 2. アルゴリズムとプログラミング
    new Question(
        "アルゴリズムとは何ですか？",
        ["プログラミング言語", "問題解決の手順", "コンピュータの部品", "ソフトウェア"],
        1,
        "アルゴリズムは、問題を解決するための明確で有限な手順のことです。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フローチャートで判断を表す図形はどれですか？",
        ["長方形", "楕円", "ひし形", "円"],
        2,
        "ひし形（菱形）は、条件分岐や判断を表現するのに使われます。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムの基本構造でないものはどれですか？",
        ["順次", "選択", "反復", "暗記"],
        3,
        "プログラムの基本構造は順次・選択・反復の3つです。暗記は含まれません。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "変数とは何ですか？",
        ["定数", "データを格納する入れ物", "プログラムの名前", "エラーメッセージ"],
        1,
        "変数は、プログラム中でデータを一時的に格納するための「入れ物」です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "for文の主な用途は何ですか？",
        ["条件分岐", "繰り返し処理", "関数定義", "エラー処理"],
        1,
        "for文は、指定した回数だけ処理を繰り返すためのプログラム構造です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "配列とは何ですか？",
        ["単一のデータ", "複数のデータをまとめて扱うもの", "プログラムの名前", "エラーの種類"],
        1,
        "配列は、同じ種類の複数のデータをまとめて管理するデータ構造です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "バブルソートアルゴリズムの特徴は何ですか？",
        ["最速のソート", "隣接要素を比較交換", "メモリを大量消費", "複雑な実装"],
        1,
        "バブルソートは、隣接する要素を比較して交換を繰り返すシンプルなソートアルゴリズムです。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "線形探索（リニアサーチ）の特徴は何ですか？",
        ["データが整列されている必要がある", "先頭から順番に探索", "最も高速", "複雑な実装"],
        1,
        "線形探索は、データを先頭から順番に調べていく最もシンプルな探索方法です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムのデバッグとは何ですか？",
        ["プログラムを実行する", "エラーを見つけて修正する", "プログラムを保存する", "プログラムをコピーする"],
        1,
        "デバッグは、プログラム中のエラー（バグ）を発見し、修正する作業です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "関数の利点として正しくないものはどれですか？",
        ["コードの再利用", "処理の分割", "メモリ使用量の増加", "保守性の向上"],
        2,
        "関数は処理をまとめることでコードの再利用性を高め、通常はメモリ効率も向上します。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Intermediate
    ),

    // 3. 情報通信ネットワーク
    new Question(
        "インターネットで使用される基本的なプロトコルはどれですか？",
        ["HTTP", "TCP/IP", "FTP", "SMTP"],
        1,
        "TCP/IPは、インターネット通信の基盤となるプロトコル群です。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページを表示するために使用されるプロトコルはどれですか？",
        ["TCP", "IP", "HTTP", "UDP"],
        2,
        "HTTP（HyperText Transfer Protocol）は、Webページの送受信に使用されるプロトコルです。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "IPアドレスの現在の主流バージョンはどれですか？",
        ["IPv2", "IPv4", "IPv6", "IPv8"],
        1,
        "現在最も広く使用されているのはIPv4ですが、IPv6への移行も進んでいます。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DNSの役割は何ですか？",
        ["データの暗号化", "ドメイン名とIPアドレスの変換", "ウイルス検出", "データ圧縮"],
        1,
        "DNS（Domain Name System）は、人間が覚えやすいドメイン名をIPアドレスに変換するシステムです。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "無線LANのセキュリティで現在推奨される暗号化方式はどれですか？",
        ["WEP", "WPA", "WPA2", "WPA3"],
        3,
        "WPA3は最新の無線LANセキュリティ規格で、最も強固な暗号化を提供します。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "電子メールで使用される代表的なプロトコルはどれですか？",
        ["HTTP", "FTP", "SMTP", "DNS"],
        2,
        "SMTP（Simple Mail Transfer Protocol）は、電子メールの送信に使用されるプロトコルです。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "LAN（Local Area Network）の特徴として正しいものはどれですか？",
        ["世界規模のネットワーク", "限定された地域のネットワーク", "電話回線のみ使用", "暗号化が不要"],
        1,
        "LANは、学校や会社など限定された地域内でのコンピュータネットワークです。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ルーターの主な機能は何ですか？",
        ["データの保存", "異なるネットワーク間の中継", "ウイルススキャン", "文書の印刷"],
        1,
        "ルーターは、異なるネットワーク間でデータパケットを適切な経路に転送する装置です。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドサービスの特徴として正しくないものはどれですか？",
        ["インターネット経由でサービス利用", "初期投資が高額", "スケーラビリティ", "場所を選ばない利用"],
        1,
        "クラウドサービスは初期投資を抑えて、必要に応じてリソースを利用できるのが特徴です。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webブラウザの主な機能は何ですか？",
        ["メールの送受信", "HTMLファイルの表示", "プログラムの作成", "データベース管理"],
        1,
        "Webブラウザは、HTMLで記述されたWebページを表示するソフトウェアです。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),

    // 4. 情報デザイン
    new Question(
        "ユーザビリティとは何ですか？",
        ["システムの速度", "使いやすさ", "画面の美しさ", "機能の豊富さ"],
        1,
        "ユーザビリティは、ユーザーにとっての使いやすさや操作性のことです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アクセシビリティとは何ですか？",
        ["処理速度", "誰もが利用できる設計", "セキュリティの強さ", "データ容量"],
        1,
        "アクセシビリティは、障害の有無に関わらず誰もが利用できるように配慮した設計のことです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページのデザインで重要な「レスポンシブデザイン」とは何ですか？",
        ["応答速度の向上", "画面サイズに応じたレイアウト調整", "色彩の自動調整", "音声対応"],
        1,
        "レスポンシブデザインは、PC、タブレット、スマートフォンなど異なる画面サイズに対応するデザイン手法です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報デザインにおける「階層構造」の目的は何ですか？",
        ["装飾を増やす", "情報を整理して理解しやすくする", "ファイルサイズを小さくする", "処理速度を上げる"],
        1,
        "階層構造は、情報を重要度や関連性に応じて整理し、ユーザーの理解を助けます。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プレゼンテーション作成時に重要でないものはどれですか？",
        ["聞き手を意識した内容", "読みやすいフォント", "派手なアニメーション", "論理的な構成"],
        2,
        "効果的なプレゼンテーションでは、内容の分かりやすさが重要で、過度な装飾は逆効果になります。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "色彩設計で「コントラスト」を考慮する理由は何ですか？",
        ["美しく見せるため", "読みやすさの向上", "印刷コストの削減", "ファイルサイズの縮小"],
        1,
        "適切なコントラストは、文字や図形の見やすさを向上させ、情報の伝達効果を高めます。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTMLの基本構造で、Webページのタイトルを設定するタグはどれですか？",
        ["<body>", "<head>", "<title>", "<html>"],
        2,
        "<title>タグは、Webページのタイトルを設定し、ブラウザのタブに表示されます。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSの主な役割は何ですか？",
        ["動作の制御", "見た目の装飾", "データベース操作", "サーバー通信"],
        1,
        "CSS（Cascading Style Sheets）は、HTMLで作成したWebページの見た目やレイアウトを制御します。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報を可視化する際の「グラフ」の選択基準は何ですか？",
        ["見た目の美しさ", "データの性質と目的", "作成の簡単さ", "色の豊富さ"],
        1,
        "グラフの種類は、表現したいデータの性質（量的・質的、時系列など）と目的に応じて選択します。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webサイトの「ナビゲーション」の目的は何ですか？",
        ["装飾効果", "ユーザーの迷子防止と誘導", "検索エンジン対策", "表示速度向上"],
        1,
        "ナビゲーションは、ユーザーがサイト内で迷わずに目的の情報にたどり着けるよう誘導する仕組みです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),

    // 5. 情報社会と倫理
    new Question(
        "情報社会における「デジタルデバイド」とは何ですか？",
        ["デジタル機器の故障", "情報技術格差", "データの分割", "画面の分割"],
        1,
        "デジタルデバイドは、情報技術を利用できる人とできない人の間の格差のことです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SNSを利用する際に注意すべきことはどれですか？",
        ["個人情報の管理", "写真の画質", "投稿の頻度", "フォロワー数"],
        0,
        "SNS利用時は、個人情報の適切な管理と、投稿内容による他者への影響を考慮することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "著作権法で保護される著作物に含まれないものはどれですか？",
        ["小説", "音楽", "プログラム", "アイデア"],
        3,
        "著作権は表現を保護するもので、アイデアそのものは保護されません。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "パスワードの安全性を高める方法として適切でないものはどれですか？",
        ["英数字と記号の組み合わせ", "8文字以上の長さ", "個人情報を含む内容", "定期的な変更"],
        2,
        "パスワードに生年月日や名前などの個人情報を含めると、推測されやすくなり危険です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フィッシング詐欺の手口として典型的なものはどれですか？",
        ["偽のWebサイトへの誘導", "ソフトウェアの販売", "技術サポート", "広告の表示"],
        0,
        "フィッシング詐欺は、偽のWebサイトに誘導して個人情報を盗み取る手口です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報モラルにおいて重要でないものはどれですか？",
        ["他者への配慮", "正確な情報の発信", "技術的な知識", "法令の遵守"],
        2,
        "情報モラルは技術的知識よりも、他者への配慮や社会的責任感が重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ネットいじめの特徴として正しくないものはどれですか？",
        ["匿名性", "拡散性", "時間制限がある", "証拠が残る"],
        2,
        "ネットいじめは24時間いつでも起こりうるもので、時間的な制限がないことが特徴です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "個人情報保護において重要でないものはどれですか？",
        ["本人の同意", "利用目的の明示", "安全管理措置", "データの大量収集"],
        3,
        "個人情報保護では、必要最小限の収集が原則で、大量収集は適切ではありません。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンピュータウイルスの感染を防ぐ方法として適切でないものはどれですか？",
        ["セキュリティソフトの導入", "OSの定期更新", "怪しいファイルの実行", "メールの添付ファイルに注意"],
        2,
        "怪しいファイルの実行は、ウイルス感染の原因となるため避けるべきです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報化社会の利点として正しくないものはどれですか？",
        ["情報アクセスの向上", "コミュニケーションの多様化", "プライバシーの完全保護", "業務効率の向上"],
        2,
        "情報化社会では利便性が向上しますが、プライバシー保護には新たな課題も生まれています。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),

    // 6. データの活用
    new Question(
        "統計データを正しく理解するために重要なことはどれですか？",
        ["データ数の多さ", "データの出典と条件", "グラフの美しさ", "結論の明確さ"],
        1,
        "統計データを正しく理解するには、データの出典、収集条件、サンプル数などを確認することが重要です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "表計算ソフトの「関数」の利点は何ですか？",
        ["見た目の改善", "計算の自動化", "ファイルサイズの削減", "印刷品質の向上"],
        1,
        "関数を使うことで、複雑な計算を自動化し、データが変更されても結果が自動的に更新されます。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースの「主キー」の役割は何ですか？",
        ["データの暗号化", "レコードの一意識別", "データの圧縮", "アクセス権限の管理"],
        1,
        "主キーは、データベースの各レコードを一意に識別するためのフィールドです。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ビッグデータの特徴「3V」に含まれないものはどれですか？",
        ["Volume（量）", "Velocity（速度）", "Variety（多様性）", "Visibility（可視性）"],
        3,
        "ビッグデータの3Vは、Volume（量）、Velocity（速度）、Variety（多様性）です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "オープンデータの利点として適切でないものはどれですか？",
        ["透明性の向上", "イノベーションの促進", "個人情報の完全公開", "再利用の促進"],
        2,
        "オープンデータは透明性とイノベーションを促進しますが、個人情報は適切に保護される必要があります。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データの可視化において「適切なグラフの選択」が重要な理由は何ですか？",
        ["作成時間の短縮", "正確な情報伝達", "ファイルサイズの縮小", "印刷コストの削減"],
        1,
        "データの性質に応じて適切なグラフを選択することで、情報を正確かつ効果的に伝えられます。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習において「教師あり学習」とは何ですか？",
        ["教師が直接指導", "正解データを使った学習", "人間の指示による学習", "自動的な学習"],
        1,
        "教師あり学習は、入力と正解のペアとなるデータを使ってAIモデルを訓練する手法です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "人工知能（AI）の活用分野として現在最も注目されているものはどれですか？",
        ["音楽作成", "画像認識", "ゲーム開発", "文書作成"],
        1,
        "画像認識は、自動運転、医療診断、セキュリティなど幅広い分野で活用が進んでいます。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IoT（Internet of Things）の特徴として正しいものはどれですか？",
        ["コンピュータのみの接続", "様々なモノのインターネット接続", "高速計算専用", "ゲーム専用技術"],
        1,
        "IoTは、従来インターネットに接続されていなかった様々なモノを接続する技術です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドコンピューティングの「SaaS」とは何ですか？",
        ["Software as a Service", "System as a Service", "Security as a Service", "Server as a Service"],
        0,
        "SaaS（Software as a Service）は、ソフトウェアをインターネット経由で提供するサービス形態です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),

    // 7. 問題解決とコンピュータ活用（続き）
    new Question(
        "問題解決の手順で最初に行うべきことは何ですか？",
        ["解決方法の実行", "問題の明確化", "結果の評価", "ツールの選択"],
        1,
        "効果的な問題解決のためには、まず問題を正確に把握し、明確化することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブレインストーミングの基本原則でないものはどれですか？",
        ["批判の禁止", "量より質", "自由奔放", "他人のアイデアに便乗"],
        1,
        "ブレインストーミングでは「質より量」が原則で、多くのアイデアを出すことを重視します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "PDCA サイクルの「C」は何を表しますか？",
        ["Create", "Check", "Change", "Complete"],
        1,
        "PDCAサイクルのCは「Check（確認・評価）」を表します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータを活用した協働作業の利点として適切でないものはどれですか？",
        ["時間と場所の制約軽減", "情報共有の効率化", "個人作業の完全化", "リアルタイム編集"],
        2,
        "コンピュータを活用した協働作業は、チームワークを促進するもので、個人作業の完全化は目的ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報システムの設計において「ユーザー中心設計」とは何ですか？",
        ["技術を最優先", "利用者の視点を重視", "システムの高速化", "コストの最小化"],
        1,
        "ユーザー中心設計は、実際に使用する人の視点やニーズを最優先に考えてシステムを設計する手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロトタイプ作成の目的として適切でないものはどれですか？",
        ["仕様の確認", "完成品の大量生産", "問題点の早期発見", "ユーザーフィードバック収集"],
        1,
        "プロトタイプは試作品であり、仕様確認や問題発見が目的で、大量生産には適しません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報システムの評価観点として重要でないものはどれですか？",
        ["有効性", "効率性", "複雑性", "満足度"],
        2,
        "情報システムは、有効性・効率性・満足度などで評価され、複雑性は一般的に避けるべき要素です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "シミュレーションの活用目的として適切でないものはどれですか？",
        ["予測・予想", "リスクの軽減", "実験の代替", "過去の再現"],
        3,
        "シミュレーションは未来の予測や実験の代替が主目的で、過去の再現は主要な活用目的ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "モデル化において重要な考え方はどれですか？",
        ["すべての要素を含める", "目的に応じた簡略化", "複雑さの追求", "詳細な再現"],
        1,
        "モデル化では、目的に応じて重要な要素を抽出し、適切に簡略化することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報技術を活用した課題解決において重要でないものはどれですか？",
        ["問題分析", "技術選択", "最新技術の使用", "効果測定"],
        2,
        "課題解決では、問題に適した技術を選択することが重要で、必ずしも最新技術である必要はありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),

    // 8. 総合的な情報活用能力
    new Question(
        "情報リテラシーとは何ですか？",
        ["コンピュータの操作技術", "情報を適切に活用する能力", "プログラミング技術", "ネットワーク管理技術"],
        1,
        "情報リテラシーは、情報を収集・分析・活用・発信する能力の総称です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "メディアリテラシーにおいて重要なことはどれですか？",
        ["情報の速さ", "情報の批判的思考", "情報の量", "情報の新しさ"],
        1,
        "メディアリテラシーでは、情報を鵜呑みにせず、批判的に検討する能力が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の信頼性を判断する基準として適切でないものはどれですか？",
        ["情報源の明示", "更新日時", "見た目の美しさ", "複数の情報源での確認"],
        2,
        "情報の信頼性は、情報源・更新性・客観性などで判断し、見た目の美しさは関係ありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報発信において重要な責任はどれですか？",
        ["注目度の向上", "正確性の確保", "頻度の増加", "技術の高度化"],
        1,
        "情報発信では、正確で責任ある内容を発信することが最も重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタルシチズンシップとは何ですか？",
        ["デジタル機器の所有", "デジタル社会での適切な行動", "プログラミング技術", "コンピュータ資格"],
        1,
        "デジタルシチズンシップは、デジタル社会の一員として適切に行動する能力や態度のことです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報社会で生きるために必要でない能力はどれですか？",
        ["批判的思考力", "コミュニケーション能力", "暗記力", "創造性"],
        2,
        "情報社会では、情報を記憶することより、情報を適切に活用する能力が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "21世紀型スキルに含まれないものはどれですか？",
        ["批判的思考", "協働", "単純暗記", "創造性"],
        2,
        "21世紀型スキルは、思考力・協働力・創造性などを重視し、単純暗記は含まれません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ライフロングラーニング（生涯学習）が重要な理由は何ですか？",
        ["資格取得のため", "技術の急速な変化への対応", "趣味の充実", "社会的地位の向上"],
        1,
        "技術の急速な変化に対応するため、継続的な学習が必要となっています。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報倫理において個人が守るべき原則として適切でないものはどれですか？",
        ["他者への配慮", "法令遵守", "自己利益の最大化", "プライバシー尊重"],
        2,
        "情報倫理では、自己利益よりも他者への配慮や社会全体の利益を考慮することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "Society 5.0とは何を指しますか？",
        ["5番目の社会制度", "超スマート社会", "5G通信社会", "第5次産業革命"],
        1,
        "Society 5.0は、IoT・AI・ビッグデータなどを活用した超スマート社会の実現を目指す概念です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),

    // 9. 補完問題（基礎から応用まで）
    new Question(
        "コンピュータの「入力装置」に分類されるものはどれですか？",
        ["プリンタ", "スピーカー", "マウス", "ディスプレイ"],
        2,
        "マウスは、ユーザーがコンピュータに指示を与える入力装置です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムにおける「コメント」の目的は何ですか？",
        ["処理速度の向上", "プログラムの説明", "エラーの修正", "メモリの節約"],
        1,
        "コメントは、プログラムの動作には影響せず、プログラムの内容を説明するために記述します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "「情報セキュリティ」において最も基本的な対策はどれですか？",
        ["高価なソフトの購入", "パスワードの適切な管理", "最新PCの使用", "専門家の雇用"],
        1,
        "情報セキュリティの基本は、パスワードの適切な管理から始まります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "データベースでデータを検索する際に使用される言語はどれですか？",
        ["HTML", "CSS", "SQL", "Python"],
        2,
        "SQL（Structured Query Language）は、データベースからデータを検索・操作するための言語です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webページの構造を記述するマークアップ言語はどれですか？",
        ["JavaScript", "HTML", "PHP", "CSS"],
        1,
        "HTML（HyperText Markup Language）は、Webページの構造と内容を記述するマークアップ言語です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "テキストファイルとバイナリファイルの違いは何ですか？",
        ["ファイルサイズ", "文字コードで読めるか", "保存場所", "作成ソフト"],
        1,
        "テキストファイルは文字コードで構成され人間が読めますが、バイナリファイルは機械専用の形式です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "スマートフォンで使用される代表的なOS（基本ソフト）はどれですか？",
        ["Windows", "Android", "MS-DOS", "UNIX"],
        1,
        "Android（とiOS）は、スマートフォンで最も広く使用されているOSです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の「デジタル化」の利点として適切でないものはどれですか？",
        ["劣化しない", "複製が容易", "検索が可能", "必ず高画質"],
        3,
        "デジタル化により様々な利点がありますが、品質は元データや設定に依存し、必ずしも高品質とは限りません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミングにおける「バグ」とは何ですか？",
        ["新機能", "プログラムの誤り", "処理速度", "データ容量"],
        1,
        "バグは、プログラムに含まれる誤りや不具合のことです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報通信技術の進歩により新たに生まれた職業として適切でないものはどれですか？",
        ["Webデザイナー", "データサイエンティスト", "大工", "システムエンジニア"],
        2,
        "大工は古くからある職業で、情報通信技術の進歩により新たに生まれた職業ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),

    // 追加問題 - デジタル化とコンピュータの仕組み
    new Question(
        "コンピュータがデータを処理する基本的な手順として正しいものはどれですか？",
        ["出力→処理→入力", "入力→処理→出力", "処理→入力→出力", "入力→出力→処理"],
        1,
        "コンピュータは「入力→処理→出力」の基本的な流れでデータを扱います。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "1KB（キロバイト）は何バイトですか？",
        ["100バイト", "1000バイト", "1024バイト", "1048バイト"],
        2,
        "1KB = 1024バイトです。コンピュータでは2の10乗（1024）を基準とします。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "文字コードの説明として正しいものはどれですか？",
        ["文字の色を決める", "文字を数値に対応させる", "文字の大きさを決める", "文字の書体を決める"],
        1,
        "文字コードは、文字と数値を一対一で対応させる仕組みです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "日本語文字コードとして使われているものはどれですか？",
        ["ASCII", "UTF-8", "RGB", "HTML"],
        1,
        "UTF-8は、日本語を含む世界中の文字を扱える文字コードです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "画像のファイル形式でないものはどれですか？",
        ["JPEG", "PNG", "GIF", "MP3"],
        3,
        "MP3は音声ファイルの形式で、画像ファイル形式ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "CPUの役割として正しいものはどれですか？",
        ["データの記憶", "計算処理", "データの表示", "データの入力"],
        1,
        "CPU（中央処理装置）は、コンピュータの計算処理を担当します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "メモリ（RAM）の特徴として正しいものはどれですか？",
        ["電源を切ってもデータが残る", "処理速度が遅い", "電源を切るとデータが消える", "容量が非常に大きい"],
        2,
        "RAM（主記憶装置）は電源を切るとデータが消える揮発性メモリです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハードディスクの特徴として正しいものはどれですか？",
        ["データの読み書きが最も速い", "電源を切ってもデータが残る", "データ容量が最も小さい", "プログラムを実行する"],
        1,
        "ハードディスクは電源を切ってもデータが保持される補助記憶装置です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "SSDの利点として正しくないものはどれですか？",
        ["読み書きが高速", "消費電力が少ない", "衝撃に強い", "容量当たりの価格が安い"],
        3,
        "SSDは高性能ですが、容量当たりの価格はハードディスクより高いのが一般的です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンピュータウイルスの感染経路として最も注意すべきものはどれですか？",
        ["電源ケーブル", "メールの添付ファイル", "モニターケーブル", "キーボード"],
        1,
        "メールの添付ファイルは、ウイルス感染の主要な経路の一つです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),

    // プログラミングとアルゴリズム
    new Question(
        "プログラミングにおける「変数」の説明として正しいものはどれですか？",
        ["固定された値", "データを一時的に保存する箱", "プログラムの実行順序", "エラーメッセージ"],
        1,
        "変数は、データを一時的に保存するための「箱」のような役割を果たします。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミングの三つの基本構造に含まれないものはどれですか？",
        ["順次構造", "分岐構造", "繰り返し構造", "並列構造"],
        3,
        "プログラミングの三つの基本構造は、順次・分岐・繰り返しです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "if文の役割として正しいものはどれですか？",
        ["同じ処理を繰り返す", "条件によって処理を分ける", "プログラムを終了する", "データを入力する"],
        1,
        "if文は条件によって異なる処理を実行する分岐構造を作ります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "for文の主な用途は何ですか？",
        ["条件分岐", "繰り返し処理", "データ入力", "エラー処理"],
        1,
        "for文は決められた回数だけ処理を繰り返すために使用します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "フローチャートで使用される図形で、処理を表すものはどれですか？",
        ["円", "四角形", "ひし形", "三角形"],
        1,
        "フローチャートでは、四角形（長方形）が処理を表します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "フローチャートで条件分岐を表す図形はどれですか？",
        ["円", "四角形", "ひし形", "六角形"],
        2,
        "フローチャートでは、ひし形が条件判定（分岐）を表します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "アルゴリズムの説明として正しいものはどれですか？",
        ["プログラミング言語の名前", "問題解決の手順", "コンピュータの部品", "ソフトウェアの種類"],
        1,
        "アルゴリズムは、問題を解決するための具体的な手順や方法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラムのテストの目的として正しいものはどれですか？",
        ["プログラムを高速化する", "エラーを発見・修正する", "コードを短くする", "メモリを節約する"],
        1,
        "プログラムのテストは、エラー（バグ）を発見して修正することが主な目的です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プログラミング言語の例として正しくないものはどれですか？",
        ["Python", "Java", "Scratch", "PDF"],
        3,
        "PDFはファイル形式であり、プログラミング言語ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビジュアルプログラミング言語の特徴は何ですか？",
        ["文字だけで書く", "ブロックを組み合わせる", "数式だけで書く", "音声で指示する"],
        1,
        "ビジュアルプログラミング言語は、ブロックやアイコンを組み合わせてプログラムを作成します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),

    // 情報通信ネットワーク
    new Question(
        "インターネットの基本的な仕組みとして正しいものはどれですか？",
        ["一つの大きなコンピュータ", "世界中のコンピュータネットワーク", "携帯電話だけのネットワーク", "テレビ放送の仕組み"],
        1,
        "インターネットは世界中のコンピュータネットワークが相互接続された巨大なネットワークです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "IPアドレスの役割として正しいものはどれですか？",
        ["パスワードの管理", "コンピュータの住所", "ファイルの種類識別", "データの暗号化"],
        1,
        "IPアドレスは、ネットワーク上のコンピュータを識別するための「住所」です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "URLの説明として正しいものはどれですか？",
        ["ユーザーの名前", "Webページの住所", "パスワード", "ファイルサイズ"],
        1,
        "URL（Uniform Resource Locator）は、インターネット上のWebページの住所を示します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTTPとHTTPSの違いとして正しいものはどれですか？",
        ["速度の違い", "暗号化の有無", "色の違い", "言語の違い"],
        1,
        "HTTPSは、HTTPに暗号化機能を追加したより安全な通信プロトコルです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webブラウザの役割として正しいものはどれですか？",
        ["メールを送る", "Webページを表示する", "音楽を再生する", "写真を編集する"],
        1,
        "Webブラウザは、HTMLで記述されたWebページを表示するソフトウェアです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "検索エンジンの仕組みとして正しいものはどれですか？",
        ["手動でページを収集", "プログラムで自動収集・分析", "ユーザーが登録", "ランダムに表示"],
        1,
        "検索エンジンは、プログラム（クローラー）が自動的にWebページを収集・分析して検索結果を提供します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "電子メールの件名を書く理由として最も適切なものはどれですか？",
        ["文字数を増やすため", "内容を分かりやすくするため", "送信を早くするため", "容量を大きくするため"],
        1,
        "件名は受信者がメールの内容を把握しやすくするために重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "無線LAN（Wi-Fi）のセキュリティ対策として適切でないものはどれですか？",
        ["暗号化設定", "パスワード設定", "誰でもアクセス可能にする", "不要時の電源オフ"],
        2,
        "誰でもアクセス可能にすることは、セキュリティ上非常に危険です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "公衆Wi-Fiを利用する際の注意点として正しくないものはどれですか？",
        ["パスワードなどの重要情報を入力しない", "セキュリティソフトを使用", "何でも自由にアクセスして良い", "HTTPSサイトを利用"],
        2,
        "公衆Wi-Fiでは、個人情報の送信や重要なサービスの利用は避けるべきです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウドサービスの利点として正しくないものはどれですか？",
        ["どこからでもアクセス可能", "データの自動バックアップ", "インターネット接続不要", "複数人での共有"],
        2,
        "クラウドサービスは、インターネット接続が必要なサービスです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),

    // 情報デザイン
    new Question(
        "ユーザビリティの説明として正しいものはどれですか？",
        ["見た目の美しさ", "使いやすさ", "処理速度", "データ容量"],
        1,
        "ユーザビリティは、システムやサービスの「使いやすさ」を表す概念です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "アクセシビリティの配慮として適切でないものはどれですか？",
        ["文字サイズを変更できる", "音声読み上げ対応", "色だけで情報を伝える", "キーボード操作対応"],
        2,
        "色だけで情報を伝えると、色覚に障害のある人が情報を得られない場合があります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "HTMLの役割として正しいものはどれですか？",
        ["Webページの装飾", "Webページの構造定義", "プログラムの実行", "データの暗号化"],
        1,
        "HTML（HyperText Markup Language）は、Webページの構造を定義するマークアップ言語です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "CSSの役割として正しいものはどれですか？",
        ["Webページの構造定義", "Webページの装飾", "データベース操作", "ネットワーク通信"],
        1,
        "CSS（Cascading Style Sheets）は、Webページの見た目やスタイルを定義します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "レスポンシブデザインの目的は何ですか？",
        ["処理速度の向上", "様々な画面サイズに対応", "データ容量の削減", "セキュリティの強化"],
        1,
        "レスポンシブデザインは、スマホ・タブレット・PCなど様々な画面サイズに対応したWebデザインです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webサイトの色選択で考慮すべき点として適切でないものはどれですか？",
        ["ブランドイメージ", "視認性", "個人の好み最優先", "色覚への配慮"],
        2,
        "Webサイトでは、個人の好みよりもユーザビリティやアクセシビリティを重視すべきです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報デザインにおけるコントラストの役割は何ですか？",
        ["装飾効果", "情報の見やすさ向上", "ファイルサイズ削減", "処理速度向上"],
        1,
        "コントラストは文字や画像を見やすくし、情報の判読性を向上させます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ナビゲーションデザインで重要な要素として適切でないものはどれですか？",
        ["分かりやすいメニュー構成", "現在位置の明示", "複雑で装飾的なデザイン", "一貫性のある操作方法"],
        2,
        "ナビゲーションは分かりやすさが最重要で、過度に複雑なデザインは避けるべきです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ワイヤーフレームの目的は何ですか？",
        ["最終的なデザイン", "Webサイトの構造設計", "プログラムコード", "データベース設計"],
        1,
        "ワイヤーフレームは、Webサイトの構造やレイアウトを設計する際の設計図です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロトタイプ作成の利点として適切でないものはどれですか？",
        ["早期の問題発見", "ユーザーテスト実施", "開発時間の短縮", "最終製品として使用"],
        3,
        "プロトタイプは試作品であり、最終製品として使用するものではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),

    // 情報社会と情報倫理
    new Question(
        "デジタルデバイドの説明として正しいものはどれですか？",
        ["コンピュータの故障", "情報技術の利用格差", "データの暗号化", "プログラムのエラー"],
        1,
        "デジタルデバイドは、情報技術を利用できる人とできない人の間の格差を指します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "著作権で保護される期間（個人の作品）は作者の死後何年ですか？",
        ["10年", "20年", "50年", "70年"],
        3,
        "日本では、著作権は作者の死後70年間保護されます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "フェアユース（公正利用）に該当する可能性が高いものはどれですか？",
        ["商用での無断利用", "教育目的での引用", "大量コピー", "営利目的での転載"],
        1,
        "教育目的での適切な引用は、著作権法の例外規定に該当する場合があります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "クリエイティブ・コモンズライセンスの特徴は何ですか？",
        ["完全に自由利用", "作者が利用条件を指定", "商用利用のみ可能", "期間限定利用"],
        1,
        "クリエイティブ・コモンズは、作者が利用条件を柔軟に設定できるライセンスです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "SNSでの投稿で注意すべき点として適切でないものはどれですか？",
        ["プライバシー設定の確認", "個人情報の保護", "すべての情報を公開", "相手への配慮"],
        2,
        "SNSでは個人情報や私的な情報をすべて公開することは危険です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "サイバーいじめの特徴として正しくないものはどれですか？",
        ["24時間継続の可能性", "匿名性", "時間的制限がある", "証拠が残りやすい"],
        2,
        "サイバーいじめは、インターネットの特性により時間的制限なく継続する可能性があります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "パスワードの作成で推奨される方法はどれですか？",
        ["誕生日を使用", "同じパスワードを使い回し", "英数字と記号の組み合わせ", "短くて覚えやすいもの"],
        2,
        "パスワードは英数字と記号を組み合わせ、十分な長さにすることが推奨されます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "二段階認証（二要素認証）の利点は何ですか？",
        ["ログインが簡単", "セキュリティの向上", "パスワードが不要", "高速アクセス"],
        1,
        "二段階認証は、パスワードに加えて別の認証要素を使うことでセキュリティを向上させます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "フィッシング詐欺の対策として適切でないものはどれですか？",
        ["送信者の確認", "URLの確認", "すぐにリンクをクリック", "公式サイトから直接アクセス"],
        2,
        "フィッシング詐欺では、怪しいメールのリンクを安易にクリックすることは危険です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報モラルの基本として適切でないものはどれですか？",
        ["他者への配慮", "法律の遵守", "自己の利益最優先", "責任ある行動"],
        2,
        "情報モラルでは、自己の利益だけでなく他者や社会への影響も考慮する必要があります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),

    // データの活用
    new Question(
        "データベースの基本的な役割は何ですか？",
        ["データの表示", "データの蓄積・管理", "データの削除", "データの暗号化"],
        1,
        "データベースは、大量のデータを効率的に蓄積し、管理するためのシステムです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "検索システムで使われる「AND検索」の意味は何ですか？",
        ["いずれかの条件を満たす", "すべての条件を満たす", "条件を満たさない", "条件を無視する"],
        1,
        "AND検索は、指定したすべての条件を満たすデータを検索する方法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "「OR検索」の意味として正しいものはどれですか？",
        ["すべての条件を満たす", "いずれかの条件を満たす", "条件を満たさない", "正確に一致する"],
        1,
        "OR検索は、指定した条件のいずれかを満たすデータを検索する方法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "統計の「平均値」の説明として正しいものはどれですか？",
        ["最も多く現れる値", "中央の値", "すべての値の合計を個数で割った値", "最大値と最小値の差"],
        2,
        "平均値は、すべてのデータの合計を、データの個数で割った値です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "「中央値（メディアン）」の説明として正しいものはどれですか？",
        ["最も多く現れる値", "データを並べた時の中央の値", "平均値", "最大値"],
        1,
        "中央値は、データを小さい順に並べたときに真ん中に位置する値です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "グラフの種類で、データの割合を表すのに適しているものはどれですか？",
        ["折れ線グラフ", "棒グラフ", "円グラフ", "散布図"],
        2,
        "円グラフは、全体に対する各項目の割合を視覚的に表現するのに適しています。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "散布図の用途として正しいものはどれですか？",
        ["時系列データの表示", "2つの要素の相関関係", "データの割合", "データの順位"],
        1,
        "散布図は、2つの変数の間の相関関係を視覚的に表現するのに使用します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ビッグデータの特徴として「3V」に含まれないものはどれですか？",
        ["Volume（量）", "Velocity（速度）", "Variety（多様性）", "Virtual（仮想）"],
        3,
        "ビッグデータの3Vは、Volume（量）、Velocity（速度）、Variety（多様性）です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "人工知能（AI）の説明として適切でないものはどれですか？",
        ["人間の知能を模倣", "学習能力を持つ", "100%正確な判断", "パターン認識"],
        2,
        "AIも人間が作ったシステムであり、100%正確な判断を保証するものではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "機械学習の基本的な仕組みは何ですか？",
        ["プログラマーがすべて指示", "データから自動的に学習", "ランダムに処理", "人間が手動で調整"],
        1,
        "機械学習は、大量のデータからコンピュータが自動的にパターンを学習する技術です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),

    // 問題解決とコンピュータの活用
    new Question(
        "問題解決のプロセス「PDCA」の「P」は何を表しますか？",
        ["Practice（実践）", "Plan（計画）", "Problem（問題）", "Process（過程）"],
        1,
        "PDCAサイクルのPは「Plan（計画）」を表します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "PDCAサイクルの正しい順序はどれですか？",
        ["計画→実行→評価→改善", "実行→計画→評価→改善", "評価→計画→実行→改善", "改善→計画→実行→評価"],
        0,
        "PDCAは「Plan（計画）→Do（実行）→Check（評価）→Action（改善）」の順序です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブレインストーミングの原則として適切でないものはどれですか？",
        ["質より量を重視", "他人のアイデアを批判しない", "実現可能性をすぐに判断", "自由な発想を大切にする"],
        2,
        "ブレインストーミングでは、アイデア出しの段階で実現可能性を判断せず、自由な発想を重視します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "KJ法の目的は何ですか？",
        ["データの暗号化", "情報の整理・分析", "プログラムの作成", "ネットワークの構築"],
        1,
        "KJ法は、収集した情報やアイデアを整理・分析するための手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "マインドマップの特徴として正しいものはどれですか？",
        ["直線的な構造", "中心から放射状に展開", "表形式での整理", "時系列での配置"],
        1,
        "マインドマップは、中心テーマから放射状にアイデアを展開する思考整理法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "プレゼンテーションで最も重要な要素は何ですか？",
        ["スライドの装飾", "聞き手のニーズ理解", "高性能な機器", "長時間の発表"],
        1,
        "効果的なプレゼンテーションは、聞き手のニーズや理解度に合わせて構成することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "効果的なプレゼンテーション資料の作成原則として適切でないものはどれですか？",
        ["1スライド1メッセージ", "読みやすいフォント", "情報を詰め込む", "適切な図表使用"],
        2,
        "プレゼンテーション資料では、情報を詰め込み過ぎず、要点を絞ることが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "チームワークで重要な要素として適切でないものはどれですか？",
        ["相互理解", "役割分担", "個人主義", "コミュニケーション"],
        2,
        "チームワークでは、個人主義よりも協調性と相互協力が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "プロジェクトの進行管理で使用されるガントチャートの目的は何ですか？",
        ["予算管理", "スケジュール管理", "品質管理", "人事管理"],
        1,
        "ガントチャートは、プロジェクトの作業スケジュールを視覚的に管理するツールです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンピュータシミュレーションの利点として適切でないものはどれですか？",
        ["安全な実験環境", "コスト削減", "100%正確な予測", "繰り返し実験"],
        2,
        "シミュレーションは有用なツールですが、モデルの限界により100%正確な予測はできません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),

    // 総合的な情報活用能力 - 残り40問
    new Question(
        "メディアリテラシーの説明として正しいものはどれですか？",
        ["メディアを作る技術", "メディア情報を批判的に読み解く能力", "メディア機器の操作方法", "メディアの販売方法"],
        1,
        "メディアリテラシーは、様々なメディアからの情報を批判的に分析・評価する能力です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "フェイクニュースを見分けるポイントとして適切でないものはどれですか？",
        ["情報源の確認", "複数ソースでの検証", "感情的な見出しを信用", "事実とのファクトチェック"],
        2,
        "感情的な見出しは読者の関心を引くために使われることが多く、信憑性の判断材料としては不適切です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報の信頼性を判断する基準として適切でないものはどれですか？",
        ["情報源の明確性", "更新日時", "情報の人気度", "専門性"],
        2,
        "情報の人気度や拡散度は、必ずしも信頼性を保証するものではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタルシティズンシップの概念に含まれないものはどれですか？",
        ["デジタル環境での適切な行動", "情報技術の責任ある利用", "他者のプライバシーの無視", "デジタル社会への参加"],
        2,
        "デジタルシティズンシップでは、他者のプライバシーを尊重することが重要な要素です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "21世紀型スキルに含まれる要素として適切でないものはどれですか？",
        ["批判的思考", "創造性", "暗記力", "コラボレーション"],
        2,
        "21世紀型スキルでは、暗記よりも思考力や問題解決能力が重視されます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報の可視化で重要な原則として適切でないものはどれですか？",
        ["データの正確性", "分かりやすさ", "装飾の豪華さ", "目的との適合性"],
        2,
        "情報の可視化では、豪華な装飾よりも正確性と分かりやすさが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタルポートフォリオの利点として適切でないものはどれですか？",
        ["作品の体系的管理", "スキルの可視化", "プライバシーの完全公開", "成長過程の記録"],
        2,
        "デジタルポートフォリオでも、適切なプライバシー管理は重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クリティカルシンキング（批判的思考）の要素として適切でないものはどれですか？",
        ["論理的分析", "多角的視点", "感情的判断", "証拠の検証"],
        2,
        "批判的思考では、感情に流されず論理的・客観的に分析することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報社会における生涯学習の重要性として適切でないものはどれですか？",
        ["技術の急速な変化", "知識の更新必要性", "一度学べば十分", "新しいスキルの習得"],
        2,
        "情報社会では技術の変化が速く、継続的な学習が必要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "テレワーク・リモートワークの利点として適切でないものはどれですか？",
        ["通勤時間の削減", "柔軟な働き方", "対面コミュニケーションの増加", "ワークライフバランス"],
        2,
        "テレワークでは対面コミュニケーションは減少するため、これは利点ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IoT（Internet of Things）の説明として正しいものはどれですか？",
        ["インターネットの高速化", "様々なモノがインターネットに接続", "新しいプログラミング言語", "データベースの種類"],
        1,
        "IoTは、様々な物理的デバイスがインターネットに接続され、データを交換する技術です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "スマートフォンアプリのユーザビリティ向上のために重要でないものはどれですか？",
        ["直感的な操作", "高速な動作", "複雑な機能", "分かりやすいアイコン"],
        2,
        "ユーザビリティでは、複雑さよりもシンプルで分かりやすい設計が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "オープンソースソフトウェアの特徴として正しくないものはどれですか？",
        ["ソースコードの公開", "自由な改変・配布", "必ず無料で提供", "コミュニティでの開発"],
        2,
        "オープンソースは無料の場合が多いですが、必ずしも無料である必要はありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "APIの説明として正しいものはどれですか？",
        ["プログラミング言語", "アプリケーション間の接続仕様", "データベース", "ネットワーク機器"],
        1,
        "API（Application Programming Interface）は、異なるソフトウェア間でデータをやり取りするための仕様です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "QRコードの利点として適切でないものはどれですか？",
        ["大容量データ格納", "高速読み取り", "デザインの美しさ", "エラー訂正機能"],
        2,
        "QRコードは機能性重視の技術で、デザインの美しさは主な利点ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソーシャルメディアマーケティングで重要でない要素はどれですか？",
        ["ターゲット層の分析", "コンテンツの質", "フォロワー数のみ重視", "エンゲージメント"],
        2,
        "フォロワー数だけでなく、質の高いコンテンツとエンゲージメントが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタルトランスフォーメーション（DX）の目的として適切でないものはどれですか？",
        ["業務効率化", "新しい価値創造", "従来の仕組み維持", "顧客体験向上"],
        2,
        "DXは従来の仕組みを変革し、新しい価値を創造することが目的です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サブスクリプションサービスの特徴として正しくないものはどれですか？",
        ["定期的な支払い", "継続的なサービス利用", "一度の購入で永続利用", "アップデートの提供"],
        2,
        "サブスクリプションは定期的な支払いで継続利用するモデルで、一度の購入での永続利用ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ブロックチェーン技術の特徴として正しいものはどれですか？",
        ["中央集権的管理", "データの改ざん困難", "高速処理", "単一サーバー"],
        1,
        "ブロックチェーンは分散型台帳技術で、データの改ざんが困難な特徴があります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "5G通信の利点として期待されていないものはどれですか？",
        ["高速通信", "低遅延", "大容量通信", "電力消費の大幅増加"],
        3,
        "5Gは高速・低遅延・大容量通信を実現し、電力効率の向上も期待されています。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "スマートシティの構成要素として適切でないものはどれですか？",
        ["IoTセンサー", "ビッグデータ解析", "手動による管理", "AI技術"],
        2,
        "スマートシティは、IoTやAIによる自動化・効率化が特徴で、手動管理に依存しません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "プログラミング的思考に含まれる要素として適切でないものはどれですか？",
        ["分解", "パターン認識", "抽象化", "感情移入"],
        3,
        "プログラミング的思考は論理的な問題解決手法で、感情移入は含まれません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報セキュリティの三要素（CIA）に含まれないものはどれですか？",
        ["機密性（Confidentiality）", "完全性（Integrity）", "可用性（Availability）", "拡張性（Extensibility）"],
        3,
        "情報セキュリティの三要素は、機密性・完全性・可用性です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタルアーカイブの目的として適切でないものはどれですか？",
        ["文化遺産の保存", "情報の永続的保存", "データの改ざん", "研究活動支援"],
        2,
        "デジタルアーカイブは情報の保存・保護が目的で、改ざんは避けるべき行為です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウドファーストの考え方として正しいものはどれですか？",
        ["すべてを自社サーバーで", "まずクラウド利用を検討", "クラウドは最後の選択肢", "物理サーバーを優先"],
        1,
        "クラウドファーストは、システム構築時にまずクラウドサービスの利用を検討する考え方です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報格差（デジタルデバイド）を解消するために重要でないことはどれですか？",
        ["情報教育の充実", "インフラ整備", "技術的格差の放置", "アクセシビリティ向上"],
        2,
        "情報格差解消には、技術的格差を放置せず、積極的な対策が必要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ユニバーサルデザインの原則として適切でないものはどれですか？",
        ["使用の公平性", "使用における柔軟性", "特定の人のみに配慮", "簡単で直感的な使用"],
        2,
        "ユニバーサルデザインは、できるだけ多くの人が利用できることを目指します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報技術が社会に与える影響として考慮すべきでないものはどれですか？",
        ["雇用への影響", "プライバシーへの影響", "技術進歩の停止", "環境への影響"],
        2,
        "情報技術の発展は継続的であり、その影響を考慮しながら適切に活用することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報リテラシーの基本要素として含まれないものはどれですか？",
        ["情報の収集能力", "情報の評価能力", "情報の活用能力", "情報の独占能力"],
        3,
        "情報リテラシーでは、情報の独占ではなく適切な共有と活用が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "STEM教育に含まれる分野として正しくないものはどれですか？",
        ["Science（科学）", "Technology（技術）", "Engineering（工学）", "Sports（スポーツ）"],
        3,
        "STEM教育は、Science・Technology・Engineering・Mathematics（数学）の4分野です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報社会における個人の責任として適切でないものはどれですか？",
        ["正確な情報発信", "他者のプライバシー尊重", "法律の遵守", "無制限な情報公開"],
        3,
        "情報社会でも、適切な情報管理と他者への配慮が個人の責任として求められます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタルネイティブ世代の特徴として適切でないものはどれですか？",
        ["デジタル技術への適応力", "マルチタスク能力", "アナログ技術への依存", "ソーシャルメディア活用"],
        2,
        "デジタルネイティブ世代は、生まれた時からデジタル技術に囲まれた環境で育った世代です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "サイバーセキュリティ対策として個人が実践すべきでないものはどれですか？",
        ["強固なパスワード設定", "定期的なソフトウェア更新", "すべてのファイルを公開", "セキュリティソフト使用"],
        2,
        "個人情報や重要ファイルの無制限な公開は、セキュリティリスクを高めます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "ICT（Information and Communication Technology）を活用した学習の利点として適切でないものはどれですか？",
        ["個別学習の支援", "リアルタイム評価", "学習者の孤立化", "豊富な学習資源"],
        2,
        "ICTを適切に活用すれば、むしろ協働学習やコミュニケーションを促進できます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "持続可能な社会の実現に向けた情報技術の活用として適切でないものはどれですか？",
        ["エネルギー効率化", "リモートワーク推進", "無制限な消費促進", "循環型社会支援"],
        2,
        "持続可能性では、無制限な消費ではなく、効率的で環境に配慮した利用が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報技術の進歩が社会に与える正の影響として期待されないものはどれですか？",
        ["医療技術の向上", "教育機会の拡大", "コミュニケーションの断絶", "業務効率化"],
        2,
        "情報技術は適切に活用されれば、コミュニケーションの促進につながります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報1で学習する内容として含まれないものはどれですか？",
        ["情報デザイン", "プログラミング", "量子コンピュータの詳細", "情報社会と倫理"],
        2,
        "高校の情報1では、量子コンピュータの詳細な仕組みは扱いません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "21世紀の情報社会で求められる能力として最も重要でないものはどれですか？",
        ["創造的思考力", "協働する力", "暗記に依存する力", "情報活用力"],
        2,
        "21世紀型スキルでは、暗記よりも思考力や問題解決能力が重視されます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "高校生が身につけるべき情報活用能力として適切でないものはどれですか？",
        ["課題発見・解決能力", "創造的表現力", "専門的プログラミング技術", "批判的思考力"],
        2,
        "高校段階では、専門的技術よりも基礎的な情報活用能力の習得が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報社会の課題として考慮すべき要素に含まれないものはどれですか？",
        ["プライバシー保護", "情報格差", "技術依存", "情報技術の完全拒否"],
        3,
        "情報社会では課題への対処が重要で、技術を完全に拒否することは現実的な解決策ではありません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    // 高校レベル追加問題 - 数学・理科分野
    new Question(
        "二次関数 y = ax² + bx + c のグラフの頂点のx座標は？",
        ["-b/(2a)", "b/(2a)", "-c/a", "c/a"],
        0,
        "二次関数の頂点のx座標は -b/(2a) で求められます。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "三角形の面積を求める公式として正しいものはどれですか？",
        ["底辺×高さ÷2", "底辺×高さ", "底辺+高さ÷2", "底辺²+高さ²"],
        0,
        "三角形の面積は「底辺×高さ÷2」で求められます。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "原子の中心にあるのは何ですか？",
        ["電子", "陽子", "原子核", "中性子"],
        2,
        "原子の中心には、陽子と中性子から構成される原子核があります。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "化学反応式 2H₂ + O₂ → 2H₂O は何の生成を表していますか？",
        ["酸素", "水素", "水", "二酸化炭素"],
        2,
        "この反応式は水素と酸素が反応して水が生成されることを表しています。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "光の速度はおよそどのくらいですか？",
        ["30万km/s", "3万km/s", "300万km/s", "3000万km/s"],
        0,
        "光の速度は真空中でおよそ30万km/s（正確には約299,792,458m/s）です。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "DNA の構成要素として正しくないものはどれですか？",
        ["アデニン", "グアニン", "シトシン", "アミノ酸"],
        3,
        "DNAの塩基はアデニン、グアニン、シトシン、チミンです。アミノ酸はタンパク質の構成要素です。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Intermediate
    ),
    // 英語・国語分野
    new Question(
        "英語の現在完了形の基本形は？",
        ["have + 過去分詞", "be + 現在分詞", "will + 動詞の原形", "had + 過去分詞"],
        0,
        "現在完了形は「have/has + 過去分詞」の形で作られます。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "「春はあけぼの」で始まる古典作品は？",
        ["源氏物語", "枕草子", "徒然草", "方丈記"],
        1,
        "「春はあけぼの」は清少納言の『枕草子』の冒頭部分です。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "助動詞「れる・られる」の意味として適切でないものは？",
        ["受身", "尊敬", "可能", "過去"],
        3,
        "「れる・られる」は受身、尊敬、可能、自発の意味を表しますが、過去の意味はありません。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "俳句の音律は何音ですか？",
        ["5-7-5音", "7-5-7音", "5-7-5-7-7音", "7-7-7音"],
        0,
        "俳句は5-7-5の17音から構成される短詩です。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    // 社会科分野
    new Question(
        "日本国憲法が施行されたのはいつですか？",
        ["1946年", "1947年", "1948年", "1949年"],
        1,
        "日本国憲法は1947年5月3日に施行されました。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "三権分立の「三権」に含まれないものはどれですか？",
        ["立法権", "行政権", "司法権", "教育権"],
        3,
        "三権分立は立法権、行政権、司法権の分離を意味します。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "第二次世界大戦が終了したのは何年ですか？",
        ["1944年", "1945年", "1946年", "1947年"],
        1,
        "第二次世界大戦は1945年に終了しました。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "地球の大陸のうち、最も面積が大きいのはどれですか？",
        ["アフリカ大陸", "北アメリカ大陸", "ユーラシア大陸", "南アメリカ大陸"],
        2,
        "ユーラシア大陸が世界最大の大陸です。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "日本の首都東京都の人口は約何人ですか？（2020年頃）",
        ["約1000万人", "約1400万人", "約1800万人", "約2200万人"],
        1,
        "東京都の人口は約1400万人です（2020年頃）。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    // 体育・保健分野
    new Question(
        "人間の心臓は1日に約何回拍動しますか？",
        ["約5万回", "約10万回", "約15万回", "約20万回"],
        1,
        "心臓は1分間に約70回、1日では約10万回拍動します。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "BMI（体格指数）の計算式は？",
        ["体重÷身長", "体重÷身長²", "身長÷体重", "身長²÷体重"],
        1,
        "BMIは体重(kg)を身長(m)の2乗で割って計算します。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "バレーボールで1チームの選手数は何人ですか？",
        ["5人", "6人", "7人", "8人"],
        1,
        "バレーボールは1チーム6人でプレーします。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "マラソンの距離は何kmですか？",
        ["40.195km", "41.195km", "42.195km", "43.195km"],
        2,
        "マラソンの距離は42.195kmです。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    // 技術・工学分野
    new Question(
        "オームの法則を表す式はどれですか？",
        ["V = I × R", "P = V × I", "E = mc²", "F = ma"],
        0,
        "オームの法則は V = I × R（電圧=電流×抵抗）で表されます。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "電流の単位は何ですか？",
        ["ボルト(V)", "アンペア(A)", "オーム(Ω)", "ワット(W)"],
        1,
        "電流の単位はアンペア(A)です。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "コンピュータの基本構成要素として正しくないものはどれですか？",
        ["CPU", "メモリ", "ハードディスク", "スピーカー"],
        3,
        "スピーカーは周辺機器であり、コンピュータの基本構成要素ではありません。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "1バイトは何ビットですか？",
        ["4ビット", "8ビット", "16ビット", "32ビット"],
        1,
        "1バイトは8ビットです。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    new Question(
        "インターネットで使用される通信プロトコルの基本は？",
        ["FTP", "HTTP", "TCP/IP", "SMTP"],
        2,
        "インターネットの基本通信プロトコルはTCP/IPです。",
        QuestionCategory.BasicComputing,
        DifficultyLevel.Basic
    ),
    // 情報セキュリティ・モラル分野
    new Question(
        "パスワードの設定で最も安全性が高いものはどれですか？",
        ["12345678", "password", "MyBirthday1990", "Kj8#mR2$pL9@"],
        3,
        "長さがあり、大小英字、数字、記号を組み合わせたパスワードが最も安全です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フィッシング詐欺の特徴として正しいものはどれですか？",
        ["正規サイトを模倣する", "ウイルスを直接送信する", "コンピュータを物理的に破壊する", "インターネットを遮断する"],
        0,
        "フィッシング詐欺は正規のサイトやメールを模倣して個人情報を盗む手法です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "著作権法で保護される期間は原則として何年間ですか？",
        ["作者の死後30年", "作者の死後50年", "作者の死後70年", "作者の死後100年"],
        2,
        "著作権の保護期間は原則として作者の死後70年間です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SNSの利用で気をつけるべきことは？",
        ["個人情報の公開", "友達の数を増やす", "毎日投稿する", "いいねを多くもらう"],
        0,
        "SNSでは個人情報の公開に注意し、プライバシーを保護することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    // プログラミング基礎
    new Question(
        "プログラミングの「変数」とは何ですか？",
        ["固定された値", "データを格納する箱", "計算結果", "プログラムの名前"],
        1,
        "変数はデータを格納するための箱のような概念です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミングの「if文」の役割は？",
        ["繰り返し処理", "条件分岐", "データ入力", "計算処理"],
        1,
        "if文は条件によって処理を分岐させるための制御構造です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "プログラミングの「ループ」とは何ですか？",
        ["エラー処理", "繰り返し処理", "データ保存", "画面表示"],
        1,
        "ループは同じ処理を繰り返し実行するための仕組みです。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アルゴリズムとは何ですか？",
        ["プログラムの名前", "問題解決の手順", "コンピュータの部品", "データの種類"],
        1,
        "アルゴリズムは問題を解決するための明確な手順や方法です。",
        QuestionCategory.AlgorithmProgrammingBasics,
        DifficultyLevel.Basic
    ),
    // データ活用・統計
    new Question(
        "平均値の計算方法として正しいものは？",
        ["最大値+最小値÷2", "データの合計÷データ数", "中央の値", "最も多い値"],
        1,
        "平均値はデータの合計をデータ数で割って求めます。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "中央値（メディアン）とは何ですか？",
        ["最も大きい値", "最も小さい値", "真ん中の値", "最も多い値"],
        2,
        "中央値はデータを大小順に並べたときの真ん中の値です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "度数分布表の作成で最初に行うことは？",
        ["平均を計算する", "階級を決める", "グラフを描く", "最大値を求める"],
        1,
        "度数分布表を作るには、まず階級（区間）を決める必要があります。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "散布図で表現できる関係性は？",
        ["時系列変化", "2つの変数の関係", "項目別比較", "全体に対する割合"],
        1,
        "散布図は2つの変数の関係性を視覚的に表現するグラフです。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    // ネットワーク・通信
    new Question(
        "IPアドレスの役割は何ですか？",
        ["データの暗号化", "ネットワーク上の住所", "データの圧縮", "ウイルス対策"],
        1,
        "IPアドレスはネットワーク上でコンピュータを識別するための住所のような役割を果たします。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTTPとは何の略ですか？",
        ["HyperText Transfer Protocol", "High Technology Transfer Process", "Home Terminal Transfer Program", "Hardware Text Transfer Port"],
        0,
        "HTTPはHyperText Transfer Protocolの略で、Webページの転送に使用されるプロトコルです。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Wi-Fiの暗号化方式として最も安全なものは？",
        ["WEP", "WPA", "WPA2", "WPA3"],
        3,
        "現在最も安全とされるWi-Fi暗号化方式はWPA3です。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ドメイン名の仕組みで正しい説明は？",
        ["数字のIPアドレスを覚えやすい名前に変換", "データを暗号化する", "ウイルスを検出する", "通信速度を向上させる"],
        0,
        "ドメイン名は数字のIPアドレスを人間にとって覚えやすい名前に変換するシステムです。",
        QuestionCategory.NetworkCommunicationBasics,
        DifficultyLevel.Basic
    ),
    // デジタル技術応用
    new Question(
        "IoT（Internet of Things）とは何ですか？",
        ["高速インターネット", "モノのインターネット", "人工知能", "仮想現実"],
        1,
        "IoTはInternet of Thingsの略で、様々なモノがインターネットに接続される仕組みです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "クラウドサービスの利点として正しくないものは？",
        ["どこからでもアクセス可能", "自動バックアップ", "データの完全な秘匿性", "ソフトウェアの自動更新"],
        2,
        "クラウドサービスでは運営者がデータにアクセスできる場合があるため、完全な秘匿性は保証されません。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "QRコードの特徴として正しいものは？",
        ["1次元バーコード", "2次元バーコード", "音声データ保存", "動画データ保存"],
        1,
        "QRコードは2次元バーコードの一種で、大量の情報を格納できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ビッグデータの特徴「3V」に含まれないものは？",
        ["Volume（量）", "Velocity（速度）", "Variety（多様性）", "Victory（勝利）"],
        3,
        "ビッグデータの3Vは、Volume（量）、Velocity（速度）、Variety（多様性）です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    // デザイン・UI/UX
    new Question(
        "ユーザーインターフェース（UI）とは何ですか？",
        ["利用者とシステムの接点", "コンピュータの内部構造", "データの保存方法", "プログラムのエラー"],
        0,
        "UIは利用者（ユーザー）とシステムが情報をやり取りするための接点です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ユーザビリティの向上で重要な要素は？",
        ["機能の複雑化", "操作の簡単さ", "デザインの派手さ", "機能の多さ"],
        1,
        "ユーザビリティの向上には、操作の簡単さや使いやすさが重要です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページのアクセシビリティとは何ですか？",
        ["高速アクセス", "多様な人が利用可能", "セキュリティ強化", "デザインの美しさ"],
        1,
        "アクセシビリティは障害の有無に関わらず、多様な人がWebページを利用できることです。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "色のバリアフリーで配慮すべきことは？",
        ["明るい色を使う", "色だけで情報を伝えない", "カラフルにする", "黒と白だけ使う"],
        1,
        "色覚障害に配慮して、色だけでなく形や文字でも情報を伝えることが重要です。",
        QuestionCategory.InformationDesignBasics,
        DifficultyLevel.Basic
    ),
    // 問題解決・論理的思考
    new Question(
        "論理的思考で重要なプロセスは？",
        ["感情的判断", "順序立てた分析", "直感的決定", "多数決による決定"],
        1,
        "論理的思考では、問題を順序立てて分析し、根拠に基づいて結論を導くことが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "問題解決の最初のステップは？",
        ["解決策の実行", "問題の明確化", "結果の評価", "原因の除去"],
        1,
        "問題解決では、まず問題を明確に定義することから始めます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "批判的思考（クリティカルシンキング）とは？",
        ["他人を批判する思考", "客観的で論理的な思考", "感情的な思考", "創造的な思考"],
        1,
        "批判的思考は情報や主張を客観的に分析し、論理的に評価する思考法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブレインストーミングの原則として正しくないものは？",
        ["質より量を重視", "他人のアイデアを批判しない", "現実的なアイデアのみ出す", "自由な発想を奨励"],
        2,
        "ブレインストーミングでは現実的でないアイデアも歓迎し、自由な発想を重視します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    // 情報活用・検索
    new Question(
        "効果的な検索キーワードの選び方は？",
        ["長い文章で検索", "具体的で関連性の高い語句", "一般的すぎる語句", "感情的な表現"],
        1,
        "効果的な検索には、具体的で関連性の高いキーワードを選ぶことが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "信頼できる情報源の特徴は？",
        ["更新日が古い", "著者や出典が明確", "感情的な表現が多い", "広告が多い"],
        1,
        "信頼できる情報源は著者や出典が明確で、客観的な内容が記載されています。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の真偽を確認する方法として適切でないものは？",
        ["複数の情報源で確認", "著者の信頼性を調査", "最初に見つけた情報を信じる", "一次情報を確認"],
        2,
        "情報の真偽確認では、複数の情報源と比較検討することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "引用とは何ですか？",
        ["他人の文章を無断使用", "出典を明記して他人の文章を使用", "自分の意見を述べる", "文章を要約する"],
        1,
        "引用は他人の文章や考えを、出典を明記して適切に使用することです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    // 現代社会とテクノロジー
    new Question(
        "デジタルデバイドとは何ですか？",
        ["デジタル技術の進歩", "情報格差", "データの分割", "デジタル化"],
        1,
        "デジタルデバイドは、デジタル技術にアクセスできる人とできない人の間の格差を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "テレワークの利点として正しくないものは？",
        ["通勤時間の削減", "作業環境の自由度", "対面コミュニケーションの増加", "ワークライフバランス向上"],
        2,
        "テレワークは対面コミュニケーションが減少するという課題があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "エシカルハッキングとは何ですか？",
        ["悪意のあるハッキング", "セキュリティ強化のためのハッキング", "個人情報の盗取", "システムの破壊"],
        1,
        "エシカルハッキングはセキュリティの脆弱性を発見し、改善するための合法的なハッキングです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "GDPR（一般データ保護規則）の主な目的は？",
        ["データ収集の促進", "個人データの保護", "インターネット速度向上", "技術革新の推進"],
        1,
        "GDPRは個人データの保護とプライバシー権の強化を目的とした法律です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    // 情報社会・倫理 追加問題（55問）
    new Question(
        "個人情報保護法の目的は何ですか？",
        ["企業利益の保護", "個人情報の適切な取扱い", "技術発展の促進", "コスト削減"],
        1,
        "個人情報保護法は個人情報の適切な取扱いにより個人の権利利益を保護することを目的とします。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "著作権で保護される期間は作者の死後何年ですか？",
        ["30年", "50年", "70年", "100年"],
        2,
        "日本では著作権の保護期間は原則として作者の死後70年間です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "肖像権とは何を保護する権利ですか？",
        ["名前", "顔や姿", "声", "すべて正しい"],
        3,
        "肖像権は個人の顔や姿、名前、声など、その人を特定できる要素を保護する権利です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "サイバーいじめの特徴は何ですか？",
        ["一時的", "匿名性と拡散性", "限定的", "軽微"],
        1,
        "サイバーいじめは匿名性が高く、内容が広範囲に拡散される特徴があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フィッシング詐欺とは何ですか？",
        ["魚釣りゲーム", "偽サイトでの情報窃取", "写真加工", "音楽配信"],
        1,
        "フィッシング詐欺は偽のWebサイトに誘導して個人情報を盗み取る詐欺手法です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタルデバイドとは何ですか？",
        ["デジタル技術の格差", "デジタル機器の故障", "デジタル化の推進", "デジタル技術の統合"],
        0,
        "デジタルデバイドはデジタル技術にアクセスできる人とできない人の間の格差を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ネチケットとは何ですか？",
        ["ネットワーク技術", "インターネット上のマナー", "ネット料金", "ネット速度"],
        1,
        "ネチケットはインターネット上でのエチケット、つまりネット上でのマナーや礼儀を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "炎上とは何を指しますか？",
        ["コンピューターの故障", "批判的コメントの大量発生", "高速通信", "人気の急上昇"],
        1,
        "炎上はSNSなどで批判的なコメントが大量に寄せられ、収拾がつかなくなる状態を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報モラルとは何ですか？",
        ["技術の知識", "情報社会での道徳", "法的知識", "プログラミング技術"],
        1,
        "情報モラルは情報社会で適切に活動するための道徳・倫理観を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SNSで個人情報を公開する際の注意点は何ですか？",
        ["すべて公開する", "必要最小限に留める", "友人にのみ公開", "企業にのみ公開"],
        1,
        "SNSでは個人情報の公開を必要最小限に留め、プライバシー設定を適切に行うことが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の信頼性を判断する際に重要なことは何ですか？",
        ["情報の新しさのみ", "情報源の確認", "情報量の多さ", "アクセス数"],
        1,
        "情報の信頼性を判断するには、情報源の信頼性や複数の情報源との照合が重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フェイクニュースとは何ですか？",
        ["新しいニュース", "偽の情報", "海外のニュース", "速報ニュース"],
        1,
        "フェイクニュースは意図的に作られた偽の情報で、人々を騙したり混乱させたりする目的で作成されます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ワンクリック詐欺とは何ですか？",
        ["1回クリックするゲーム", "クリック1回で料金請求", "高速クリック", "自動クリック"],
        1,
        "ワンクリック詐欺は、Webサイトの閲覧やメールのリンクをクリックしただけで料金を請求する詐欺です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ソーシャルエンジニアリングとは何ですか？",
        ["社会工学", "人間の心理を利用した攻撃", "社会システム構築", "エンジニア養成"],
        1,
        "ソーシャルエンジニアリングは人間の心理的な隙や行動特性を利用して機密情報を不正に取得する手法です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "パスワードの適切な管理方法は何ですか？",
        ["同じパスワードを使い回す", "複雑で異なるパスワードを使用", "簡単なパスワードを使用", "パスワードを公開"],
        1,
        "パスワードは複雑で推測されにくく、各サービスで異なるものを使用することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "二段階認証の目的は何ですか？",
        ["高速ログイン", "セキュリティ強化", "操作簡素化", "コスト削減"],
        1,
        "二段階認証はパスワード以外の認証要素を追加することでアカウントのセキュリティを強化します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プライバシーポリシーとは何ですか？",
        ["法律", "個人情報の取扱方針", "利用規約", "サービス内容"],
        1,
        "プライバシーポリシーは組織が個人情報をどのように収集・利用・管理するかを示した方針です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "利用規約の重要性は何ですか？",
        ["法的装飾", "サービス利用のルール", "広告効果", "技術仕様"],
        1,
        "利用規約はサービス提供者と利用者の間の契約で、お互いの権利と義務を定めた重要な文書です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタルタトゥーとは何ですか？",
        ["電子機器の装飾", "ネット上に残る情報の痕跡", "画像加工", "デジタルアート"],
        1,
        "デジタルタトゥーはインターネット上に投稿した情報が半永久的に残り続ける現象を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "サイバーストーカーとは何ですか？",
        ["サイバー研究者", "ネット上でのつきまとい行為", "ネットゲーム", "サイバー警備"],
        1,
        "サイバーストーカーはインターネットを使って特定の人物につきまとい、嫌がらせを行う行為です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "著作権侵害となる行為はどれですか？",
        ["自分で撮影した写真の利用", "許可なく他人の作品を複製", "パブリックドメインの利用", "引用のルールに従った利用"],
        1,
        "著作権者の許可なく著作物を複製・配布・公開することは著作権侵害に当たります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フェアユース（公正利用）の考え方は何ですか？",
        ["無制限利用", "一定条件下での利用許可", "商用利用禁止", "著作権無効"],
        1,
        "フェアユースは教育や批評など特定の目的・条件下で著作物の利用を認める考え方です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "引用のルールで重要なことは何ですか？",
        ["大量引用", "出典明記と必要最小限", "改変自由", "商用利用"],
        1,
        "引用では出典を明記し、必要最小限の範囲で行い、元の著作物との関係性を明確にすることが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クリエイティブ・コモンズとは何ですか？",
        ["創作支援ソフト", "著作権の柔軟な許諾システム", "創作者コミュニティ", "著作権登録機関"],
        1,
        "クリエイティブ・コモンズは著作者が自作品の利用条件を柔軟に設定できるライセンスシステムです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "リベンジポルノとは何ですか？",
        ["復讐映画", "同意なく私的画像を公開", "ゲームの逆転劇", "競技の再戦"],
        1,
        "リベンジポルノは元恋人などが復讐目的で私的な画像や動画を無断で公開する行為です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "アカウントの乗っ取りを防ぐ方法は何ですか？",
        ["パスワードを簡単にする", "強固なパスワードと二段階認証", "パスワードを教える", "ログイン情報を保存"],
        1,
        "アカウント乗っ取りを防ぐには強固なパスワードの設定と二段階認証の利用が効果的です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "なりすましアカウントの問題は何ですか？",
        ["アカウント増加", "他人への誤解と混乱", "技術向上", "コミュニケーション促進"],
        1,
        "なりすましアカウントは他人の名前や写真を無断使用し、本人への誤解や混乱を招く問題があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ハラスメントの被害を受けた場合の対処法は何ですか？",
        ["我慢する", "証拠保全と相談", "反撃する", "無視する"],
        1,
        "ハラスメントの被害を受けた場合は証拠を保全し、信頼できる人や専門機関に相談することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報リテラシーとは何ですか？",
        ["IT技術", "情報を適切に扱う能力", "プログラミング技術", "タイピング技術"],
        1,
        "情報リテラシーは情報を収集・評価・活用・発信する能力を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "メディアリテラシーの重要性は何ですか？",
        ["技術習得", "情報の批判的評価", "娯楽向上", "コスト削減"],
        1,
        "メディアリテラシーは情報を批判的に評価し、適切に判断する能力で、偽情報に惑わされないために重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "エコーチェンバー現象とは何ですか？",
        ["音響効果", "同じような意見ばかり聞く状態", "反響技術", "音声認識"],
        1,
        "エコーチェンバー現象は自分と似た意見や価値観の情報ばかりに触れ、偏った認識を持つ現象です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "フィルターバブルとは何ですか？",
        ["水質浄化", "個人向けにカスタマイズされた情報環境", "気泡技術", "検索技術"],
        1,
        "フィルターバブルは検索エンジンやSNSが個人の嗜好に合わせて情報をフィルタリングすることで生じる情報の偏りです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報格差の解決に必要なことは何ですか？",
        ["技術の複雑化", "アクセス環境の整備", "情報の制限", "利用の禁止"],
        1,
        "情報格差の解決にはインフラ整備、デジタル教育、経済的支援などでアクセス環境を整備することが必要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル・ネイティブとは何ですか？",
        ["デジタル専門家", "生まれた時からデジタル環境にいる世代", "デジタル反対者", "デジタル開発者"],
        1,
        "デジタル・ネイティブは生まれた時からデジタル技術に囲まれて育った世代を指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "サイバー法の特徴は何ですか？",
        ["物理的制約", "国境を越える問題", "地域限定", "技術無関係"],
        1,
        "サイバー法は国境を越えるインターネットの特性により、国際的な協力と調整が重要な特徴です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "忘れられる権利とは何ですか？",
        ["記憶喪失の権利", "ネット上の情報削除を求める権利", "忘れ物の権利", "記録拒否の権利"],
        1,
        "忘れられる権利は個人がインターネット上の自分に関する情報の削除を求める権利です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "表現の自由とプライバシー保護の関係は何ですか？",
        ["完全に一致", "バランスの取れた調整が必要", "無関係", "表現の自由が優先"],
        1,
        "表現の自由とプライバシー保護は時に対立するため、社会的なバランスを考慮した調整が必要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "AIの倫理的問題で重要な課題は何ですか？",
        ["処理速度", "判断の透明性と公平性", "消費電力", "開発コスト"],
        1,
        "AIの倫理的問題では、判断プロセスの透明性、バイアスの排除、説明責任などが重要な課題です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // AI・機械学習の社会的影響
    new Question(
        "AIによる職業への影響について、最も適切な記述はどれか。",
        ["すべての職業がAIに置き換わる", "AIは創造的な職業にのみ影響する", "AIは一部職業を代替し、新たな職業も創出する", "AIは職業に全く影響しない"],
        2,
        "AIによる職業への影響は複雑で、一部の職業を代替する一方で、AI関連の新たな職業も生み出しています。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "機械学習における「バイアス」の問題として正しいものはどれか。",
        ["処理速度が遅くなること", "学習データの偏りが判断に影響すること", "メモリ使用量が増えること", "プログラムにバグが生じること"],
        1,
        "機械学習では、学習データに含まれるバイアスがモデルの判断に反映され、公平性の問題を引き起こします。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    new Question(
        "AI開発における倫理的配慮として最も重要なものはどれか。",
        ["開発コストの最小化", "処理速度の最大化", "公平性と透明性の確保", "市場シェアの拡大"],
        2,
        "AI開発では、公平性、透明性、説明責任などの倫理的配慮が重要な要素となります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // ブロックチェーン・仮想通貨
    new Question(
        "ブロックチェーン技術の特徴として正しいものはどれか。",
        ["中央管理者が必要", "データの改ざんが容易", "分散管理によるデータの透明性", "高速な処理が可能"],
        2,
        "ブロックチェーンは分散型台帳技術で、データの透明性と改ざん耐性を特徴とします。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "仮想通貨（暗号資産）のリスクとして適切でないものはどれか。",
        ["価格変動が大きい", "匿名性による悪用の可能性", "ハッキングのリスク", "法的な規制が一切ない"],
        3,
        "仮想通貨には様々なリスクがありますが、各国で法的規制が整備されつつあります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "NFT（Non-Fungible Token）について正しい説明はどれか。",
        ["複製可能なデジタル資産", "代替可能な暗号資産", "一意性を持つデジタル証明書", "物理的な資産のみを表現"],
        2,
        "NFTは代替不可能なトークンで、デジタル資産の一意性と所有権を証明する技術です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // 情報格差と社会問題
    new Question(
        "デジタルデバイド（情報格差）の要因として最も適切なものはどれか。",
        ["年齢による差のみ", "経済的格差・地域格差・教育格差", "性別による差のみ", "職業による差のみ"],
        1,
        "デジタルデバイドは経済的格差、地域格差、教育格差、年齢格差など複合的な要因で生じます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "高齢者のデジタル活用を支援する取り組みとして適切でないものはどれか。",
        ["デジタル機器の操作研修", "大きな文字での表示", "複雑な機能を多数搭載", "丁寧なサポート体制"],
        2,
        "高齢者支援では、複雑さを避け、分かりやすく使いやすいインターフェースが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "Society 5.0において重要な概念として正しいものはどれか。",
        ["物理空間のみの活用", "サイバー空間と物理空間の融合", "アナログ技術の復活", "個人情報の完全公開"],
        1,
        "Society 5.0では、サイバー空間と物理空間を高度に融合した社会システムが特徴です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    // デジタル遺品・デジタル終活
    new Question(
        "デジタル遺品について正しい説明はどれか。",
        ["物理的な遺品のみを指す", "故人のデジタルデータやアカウント", "相続の対象にならない", "自動的に削除される"],
        1,
        "デジタル遺品は故人が残したデジタルデータやオンラインアカウントなどを指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "デジタル終活で行うべき対策として適切でないものはどれか。",
        ["重要なアカウントの整理", "パスワードの記録・管理", "すべてのデータの即座削除", "家族への情報共有"],
        2,
        "デジタル終活では、計画的な整理と家族への適切な情報共有が重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "SNSアカウントの死後の扱いについて正しいものはどれか。",
        ["自動的に永続保存される", "サービス提供者の規約に従う", "法的に削除が義務付けられる", "政府が管理する"],
        1,
        "SNSアカウントの死後の扱いは、各サービス提供者の利用規約に従って決定されます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // 情報リテラシーと批判的思考
    new Question(
        "情報リテラシーの構成要素として適切でないものはどれか。",
        ["情報の検索・収集能力", "情報の評価・判断能力", "情報の活用・発信能力", "情報の完全記憶能力"],
        3,
        "情報リテラシーは検索・収集、評価・判断、活用・発信の能力から構成されます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "批判的思考（クリティカルシンキング）で重要なことはどれか。",
        ["すべての情報を疑うこと", "権威ある人の意見を盲信すること", "多角的な視点で情報を検証すること", "感情的に判断すること"],
        2,
        "批判的思考では、多角的な視点から情報を検証し、論理的に判断することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "メディアリテラシーで重要な視点として正しいものはどれか。",
        ["メディアは常に中立である", "メディアの意図や背景を考慮する", "映像は文字より信頼できる", "新しい情報ほど正確である"],
        1,
        "メディアリテラシーでは、メディアの意図、背景、制作者の視点を考慮することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    // オンライン学習・リモートワーク
    new Question(
        "オンライン学習の利点として適切でないものはどれか。",
        ["時間と場所の制約が少ない", "個人のペースで学習できる", "対面コミュニケーションが充実", "学習履歴の記録が容易"],
        2,
        "オンライン学習は時間・場所の柔軟性がありますが、対面コミュニケーションは制限されます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "リモートワークにおける情報セキュリティ対策として不適切なものはどれか。",
        ["VPN接続の使用", "公共Wi-Fiでの業務", "画面のロック設定", "定期的なソフトウェア更新"],
        1,
        "リモートワークでは、公共Wi-Fiの使用は情報漏洩のリスクがあるため避けるべきです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "テレワークでのコミュニケーション課題として正しいものはどれか。",
        ["通信費用の増加", "非言語的コミュニケーションの減少", "作業効率の必然的低下", "セキュリティリスクの完全排除"],
        1,
        "テレワークでは、表情や身振りなどの非言語的コミュニケーションが制限される課題があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    // 情報セキュリティと企業責任
    new Question(
        "企業の情報セキュリティ責任として最も重要なものはどれか。",
        ["利益の最大化", "顧客情報の適切な保護", "競合他社の調査", "システムの高速化"],
        1,
        "企業は顧客から預かった個人情報を適切に保護する社会的責任があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "CSR（企業の社会的責任）における情報分野の取り組みとして適切なものはどれか。",
        ["情報の独占", "デジタル格差の解消支援", "個人情報の商用利用", "システムの複雑化"],
        1,
        "企業のCSRでは、デジタル格差の解消や情報アクセスの向上支援が重要な取り組みです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "情報システムの監査で確認される項目として適切でないものはどれか。",
        ["アクセス権限の管理", "データバックアップの実施", "従業員の個人的趣味", "セキュリティポリシーの遵守"],
        2,
        "情報システム監査では、セキュリティ関連の技術的・管理的対策が確認対象となります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // デジタル・シティズンシップ
    new Question(
        "デジタル・シティズンシップの概念として正しいものはどれか。",
        ["デジタル技術の専門知識", "デジタル社会での責任ある行動", "プログラミング能力", "最新技術の習得"],
        1,
        "デジタル・シティズンシップは、デジタル社会で責任ある市民として行動する概念です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "デジタル社会での市民参加の形として適切なものはどれか。",
        ["オンライン投票やパブリックコメント", "SNSでの批判のみ", "政府システムへの不正アクセス", "個人情報の無償提供"],
        0,
        "デジタル技術を活用した建設的な市民参加として、オンライン投票やパブリックコメントがあります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "持続可能な社会におけるICT活用として適切でないものはどれか。",
        ["エネルギー効率の改善", "リモートワークによる移動削減", "無制限なデータセンター建設", "デジタル化による紙使用削減"],
        2,
        "持続可能な社会では、ICTを活用した環境負荷の軽減が重要ですが、無制限な拡張は避けるべきです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // 新興技術の社会的影響
    new Question(
        "IoT（Internet of Things）の普及による社会変化として正しいものはどれか。",
        ["インターネット利用者の減少", "様々な機器がネットワークに接続", "プライバシーリスクの完全解消", "通信速度の低下"],
        1,
        "IoTにより、従来インターネットに接続していなかった様々な機器がネットワークに接続されます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "5G技術の活用例として適切でないものはどれか。",
        ["自動運転車の制御", "遠隔医療の高度化", "AR/VRの普及促進", "紙媒体の完全復活"],
        3,
        "5Gは高速・低遅延通信を可能にし、様々なデジタル技術の発展を促進します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "量子コンピューティングが普及した場合の影響として考えられるものはどれか。",
        ["現在の暗号化技術の無力化", "インターネットの完全廃止", "コンピューターの価格上昇", "プログラミングの不要化"],
        0,
        "量子コンピューティングは現在の暗号化技術を破る可能性があり、新しいセキュリティ技術が必要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // 国際的な情報政策
    new Question(
        "GDPR（EU一般データ保護規則）の特徴として正しいものはどれか。",
        ["EU域内のみに適用", "個人データの忘れられる権利を含む", "企業の自主的な取り組み", "技術的対策のみを規定"],
        1,
        "GDPRは個人データの忘れられる権利など、強力な個人データ保護を規定する法的拘束力ある規則です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    new Question(
        "デジタル課税の議論で問題となっている点はどれか。",
        ["国境を越えたデジタルサービスの課税", "従来の製造業への課税", "現金取引の増加", "デジタル技術の開発阻害"],
        0,
        "デジタル課税では、物理的拠点を持たないデジタルサービスへの適切な課税方法が課題です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    new Question(
        "サイバーセキュリティの国際協力で重要な取り組みはどれか。",
        ["各国の独自対応", "情報共有と共同対策", "技術の秘匿", "規制の緩和"],
        1,
        "サイバー脅威は国境を越えるため、各国間の情報共有と共同対策が重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    
    // === データ活用の基礎 ===
    
    // 統計の基礎
    new Question(
        "データの代表値として適切でないものはどれか。",
        ["平均値", "中央値", "最頻値", "最大値"],
        3,
        "代表値は、データ全体の特徴を表す値で、平均値、中央値、最頻値などがあります。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "分散について正しい説明はどれか。",
        ["データの中央値", "データのばらつきの度合い", "データの最大値と最小値の差", "データの個数"],
        1,
        "分散は、データが平均値からどの程度ばらついているかを示す統計量です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "標準偏差と分散の関係として正しいものはどれか。",
        ["標準偏差 = 分散 × 2", "標準偏差 = 分散の平方根", "標準偏差 = 分散 ÷ 2", "標準偏差 = 分散の2乗"],
        1,
        "標準偏差は分散の平方根で、データのばらつきを元の単位で表現します。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "正規分布について正しい記述はどれか。",
        ["左右対称でない分布", "平均値＝中央値＝最頻値の分布", "すべてのデータが同じ値の分布", "最大値と最小値が等しい分布"],
        1,
        "正規分布は左右対称の釣鐘型で、平均値、中央値、最頻値が一致する分布です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "外れ値（異常値）の検出方法として適切でないものはどれか。",
        ["箱ひげ図による検出", "標準偏差による検出", "平均値による検出", "四分位範囲による検出"],
        2,
        "外れ値の検出には、箱ひげ図、標準偏差、四分位範囲などの手法が使用されます。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    
    // データ分析手法
    new Question(
        "相関係数について正しい説明はどれか。",
        ["常に正の値をとる", "2つの変数間の関係の強さを表す", "-2から+2の値をとる", "データの個数を表す"],
        1,
        "相関係数は-1から+1の値をとり、2つの変数間の線形関係の強さと方向を表します。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "相関係数が0.8の場合、2つの変数の関係はどう表現されるか。",
        ["強い負の相関", "弱い正の相関", "強い正の相関", "相関なし"],
        2,
        "相関係数0.8は強い正の相関を示し、一方が増加すると他方も増加する関係があります。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "回帰分析の目的として最も適切なものはどれか。",
        ["データの個数を数える", "変数間の関係をモデル化して予測する", "データを並べ替える", "データの重複を除去する"],
        1,
        "回帰分析は、変数間の関係をモデル化し、予測や説明を行うための統計手法です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "決定係数（R²）が0.9の場合、何を意味するか。",
        ["90%の確率で予測が正しい", "モデルが分散の90%を説明", "データの90%が異常値", "相関係数が0.9"],
        1,
        "決定係数0.9は、モデルが目的変数の分散の90%を説明できることを意味します。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    
    new Question(
        "多重共線性の問題として正しいものはどれか。",
        ["データが少なすぎること", "説明変数同士が強く相関すること", "目的変数が正規分布しないこと", "外れ値が多いこと"],
        1,
        "多重共線性は、説明変数間に強い相関があることで、回帰係数の解釈が困難になる問題です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    
    // データベースの基礎
    new Question(
        "データベースの正規化の目的として正しいものはどれか。",
        ["データの高速化", "データの冗長性の排除", "データの暗号化", "データの圧縮"],
        1,
        "正規化は、データの冗長性を排除し、データの整合性を保つために行われます。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "SQLのSELECT文で、重複行を除去するキーワードはどれか。",
        ["UNIQUE", "DISTINCT", "REMOVE", "DELETE"],
        1,
        "DISTINCTキーワードを使用することで、SELECT文の結果から重複行を除去できます。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "データベースのインデックスの効果として正しいものはどれか。",
        ["データの容量削減", "検索速度の向上", "データの暗号化", "データの自動バックアップ"],
        1,
        "インデックスは、データベースの検索速度を向上させるためのデータ構造です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    
    new Question(
        "リレーショナルデータベースの主キーについて正しい説明はどれか。",
        ["重複可能な値", "NULL値を含められる", "レコードを一意に識別する", "必ず数値でなければならない"],
        2,
        "主キーは、テーブル内の各レコードを一意に識別するための制約です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    
    new Question(
        "NoSQLデータベースの特徴として適切でないものはどれか。",
        ["スキーマレス設計", "水平スケーラビリティ", "厳密なACID特性", "柔軟なデータ構造"],
        2,
        "NoSQLデータベースは、柔軟性とスケーラビリティを重視し、厳密なACID特性より可用性を優先します。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),

    // 問題解決・情報活用 (55問)
    new Question(
        "問題解決における「問題の定義」段階で最も重要なことは？",
        ["解決策を早急に見つける", "問題の根本原因を特定する", "類似の過去事例を調べる", "関係者全員の合意を得る"],
        1,
        "問題解決の第一歩は問題の根本原因を正確に特定することです。表面的な症状ではなく真の原因を見つけることが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報収集における「一次情報」と「二次情報」の違いは？",
        ["新しい情報か古い情報か", "直接的な情報か間接的な情報か", "有料情報か無料情報か", "公開情報か非公開情報か"],
        1,
        "一次情報は原典や実体験からの直接的な情報、二次情報は一次情報を基に編集・加工された間接的な情報です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "批判的思考（クリティカルシンキング）で最も重要な要素は？",
        ["速く判断すること", "多数派の意見に従うこと", "証拠に基づいて判断すること", "権威者の意見を重視すること"],
        2,
        "批判的思考では、感情や偏見に左右されず、客観的な証拠や論理に基づいて判断することが最も重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の信頼性を評価する際に確認すべき項目は？",
        ["情報源の権威性のみ", "情報の新しさのみ", "情報源、正確性、客観性、最新性", "情報の量の多さ"],
        2,
        "情報の信頼性評価では、情報源の権威性、内容の正確性、客観性、最新性など複数の観点から総合的に判断します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "KJ法（カード法）の主な目的は？",
        ["情報を暗記すること", "情報を整理・分類すること", "情報を削除すること", "情報を暗号化すること"],
        1,
        "KJ法は収集した情報や意見をカードに書き出し、類似性に基づいてグループ化することで情報を整理・分類する手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "PDCAサイクルの「P」が表すものは？",
        ["Practice（実践）", "Plan（計画）", "Process（過程）", "Product（製品）"],
        1,
        "PDCAサイクルのPはPlan（計画）を表し、目標設定と実行計画の策定を行う段階です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "ブレインストーミングで重要なルールは？",
        ["批判や評価を行わない", "現実的なアイデアのみ出す", "少数の人で行う", "時間を制限しない"],
        0,
        "ブレインストーミングでは、批判や評価を行わず、自由な発想でアイデアを出すことが重要なルールです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の整理における「分類」と「分析」の違いは？",
        ["同じ意味である", "分類は仕分け、分析は関係性の発見", "分類は定量的、分析は定性的", "分類は個人作業、分析は集団作業"],
        1,
        "分類は情報を性質や特徴に基づいて仕分けすること、分析は情報の関係性や意味を深く調べることです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "問題解決における「代替案の評価」で使用される手法は？",
        ["決定マトリックス", "アンケート調査", "統計分析", "システム分析"],
        0,
        "決定マトリックスは複数の代替案を評価基準に基づいて点数化し、最適な選択肢を選ぶ手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報リテラシーの基本的な能力に含まれないものは？",
        ["情報の検索・収集", "情報の評価・選択", "情報の加工・活用", "情報の暗記・記憶"],
        3,
        "情報リテラシーは情報を検索・収集し、評価・選択し、加工・活用する能力です。単なる暗記・記憶は含まれません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "問題解決における「問題の構造化」の目的は？",
        ["問題を複雑にする", "問題の要素と関係を明確にする", "問題を隠蔽する", "問題を先送りする"],
        1,
        "問題の構造化は、複雑な問題を構成要素に分解し、要素間の関係を明確にして理解しやすくすることです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ロジックツリーの作成で重要な原則は？",
        ["MECE（Mutually Exclusive and Collectively Exhaustive）", "SMART（Specific, Measurable, Achievable, Relevant, Time-bound）", "PDCA（Plan, Do, Check, Act）", "5W1H（Who, What, When, Where, Why, How）"],
        0,
        "ロジックツリーではMECE（互いに排他的で全体的に網羅的）の原則に従い、重複なく漏れなく分解することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報の妥当性を検証する際の「トライアンギュレーション」とは？",
        ["三角形の図式化", "三つの観点から検証", "三人で議論すること", "三回繰り返すこと"],
        1,
        "トライアンギュレーションは、複数の異なる情報源や手法を用いて同じ事象を検証し、信頼性を高める手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "仮説検証における「帰無仮説」の役割は？",
        ["実証したい仮説", "否定したい仮説", "中立的な仮説", "予備的な仮説"],
        1,
        "帰無仮説は「差がない」「効果がない」など否定したい仮説で、これを統計的に棄却することで実証したい仮説を支持します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報の可視化において「チャートジャンク」とは？",
        ["有用な情報", "不要な装飾", "データの欠損", "グラフの軸"],
        1,
        "チャートジャンクは、データの理解を助けない不要な装飾や視覚的要素で、情報の伝達を阻害する要素です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "システム思考における「レバレッジポイント」とは？",
        ["最も複雑な部分", "小さな変化で大きな効果を生む点", "最も安全な部分", "最も時間のかかる部分"],
        1,
        "レバレッジポイントは、システムにおいて小さな変化が大きな効果をもたらす戦略的な介入点です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "問題解決における「根本原因分析」の手法で「なぜなぜ分析」は何回「なぜ」を繰り返すのが一般的か？",
        ["3回", "5回", "7回", "10回"],
        1,
        "なぜなぜ分析では、問題に対して「なぜ」を5回繰り返すことで根本原因に到達するのが一般的です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報収集における「セレンディピティ」とは？",
        ["計画的な情報収集", "偶然の発見", "系統的な調査", "定期的な更新"],
        1,
        "セレンディピティは、目的としていなかった有用な情報や知識を偶然発見することです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "意思決定における「確証バイアス」の影響は？",
        ["情報収集を促進する", "自分の考えを支持する情報のみ収集する", "情報を客観的に評価する", "多様な意見を受け入れる"],
        1,
        "確証バイアスは、自分の既存の信念や仮説を支持する情報のみを選択的に収集・解釈する認知バイアスです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロジェクト管理における「ガントチャート」の主な機能は？",
        ["費用の管理", "品質の管理", "時間の管理", "人材の管理"],
        2,
        "ガントチャートは、プロジェクトの各タスクの開始・終了時期を時系列で視覚化し、時間管理に使用します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報アーキテクチャにおける「情報の階層構造」を設計する際の重要な原則は？",
        ["深い階層を作る", "ユーザーの認知負荷を軽減する", "情報量を最大化する", "専門用語を多用する"],
        1,
        "情報アーキテクチャでは、ユーザーが情報を容易に理解・利用できるよう認知負荷を軽減する設計が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "複雑な問題解決における「ウィケッドプロブレム」の特徴は？",
        ["明確な解決策がある", "定義が困難で解決策が複数ある", "単純な原因がある", "短期間で解決できる"],
        1,
        "ウィケッドプロブレムは、問題の定義が困難で、複数の解決策があり、解決には時間がかかる複雑な問題です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "知識管理における「暗黙知」と「形式知」の変換プロセスで「内面化」とは？",
        ["暗黙知から形式知への変換", "形式知から暗黙知への変換", "暗黙知同士の共有", "形式知同士の結合"],
        1,
        "内面化は、文書化された形式知を学習し、個人の暗黙知として体得するプロセスです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの要求分析における「非機能要求」に含まれるものは？",
        ["業務処理の内容", "システムの性能・可用性", "データの構造", "画面の設計"],
        1,
        "非機能要求は、システムの性能、可用性、セキュリティ、保守性など、機能以外の品質特性に関する要求です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デザイン思考における「共感（Empathy）」段階の目的は？",
        ["解決策を考える", "ユーザーの本質的ニーズを理解する", "プロトタイプを作る", "テストを実行する"],
        1,
        "デザイン思考の共感段階では、ユーザーの行動、感情、ニーズを深く理解し、真の問題を発見することが目的です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報品質管理における「データプロファイリング」の目的は？",
        ["データを暗号化する", "データの特性と品質を分析する", "データを圧縮する", "データを削除する"],
        1,
        "データプロファイリングは、データの構造、内容、品質、関係性を分析し、データの特性を理解する手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組織学習における「ダブルループ学習」とは？",
        ["2回繰り返す学習", "前提や価値観を見直す学習", "2人で行う学習", "2つの方法を使う学習"],
        1,
        "ダブルループ学習は、行動の修正だけでなく、その行動の前提となる価値観や仮定を見直す深いレベルの学習です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ビッグデータ分析における「因果推論」と「相関分析」の違いは？",
        ["同じ手法である", "因果推論は原因と結果の関係、相関分析は変数間の関連性", "因果推論は定性的、相関分析は定量的", "因果推論は過去、相関分析は未来を分析"],
        1,
        "相関分析は変数間の関連性の強さを測定し、因果推論は一つの変数が他の変数に与える影響（因果関係）を分析します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システム開発における「アジャイル開発」の特徴は？",
        ["詳細な計画を最初に立てる", "短期間で反復的に開発する", "大規模チームで開発する", "文書化を重視する"],
        1,
        "アジャイル開発は、短期間のスプリントで反復的に開発し、変化に柔軟に対応することを特徴とします。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ナレッジマネジメントにおける「知識スパイラル」のSECIモデルで「共同化」とは？",
        ["暗黙知から形式知への変換", "形式知から暗黙知への変換", "暗黙知同士の共有", "形式知同士の結合"],
        2,
        "共同化（Socialization）は、体験や観察を通じて暗黙知を他者と共有するプロセスです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "問題解決における「制約理論（TOC）」の基本概念は？",
        ["すべての工程を同時に改善する", "最も弱い制約条件を特定し改善する", "コストを最小化する", "品質を最大化する"],
        1,
        "制約理論では、システム全体の性能はその最も弱い制約条件（ボトルネック）によって決まるとして、制約を特定し改善します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報可視化における「認知負荷理論」の応用で重要なことは？",
        ["情報量を最大化する", "ユーザーの記憶容量の限界を考慮する", "視覚的効果を最大化する", "技術的複雑さを追求する"],
        1,
        "認知負荷理論では、人間の短期記憶の限界（7±2）を考慮し、情報を適切に構造化して認知負荷を軽減します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "複雑適応系理論における「創発」の概念は？",
        ["計画的な変化", "個別要素の相互作用から生まれる新しい性質", "外部からの強制的変化", "予測可能な変化"],
        1,
        "創発は、システムの個別要素の相互作用から、元の要素にはない新しい性質や機能が生まれる現象です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データサイエンスにおける「特徴量エンジニアリング」の目的は？",
        ["データ量を増やす", "機械学習モデルの性能を向上させる", "データを暗号化する", "データを可視化する"],
        1,
        "特徴量エンジニアリングは、既存のデータから新しい特徴量を作成し、機械学習モデルの予測性能を向上させる手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組織の意思決定における「群集の知恵」が機能する条件は？",
        ["同質な集団", "多様性、独立性、分散化", "強いリーダーシップ", "専門家のみの参加"],
        1,
        "群集の知恵が機能するには、参加者の多様性、判断の独立性、意見の分散化が重要な条件です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムのユーザビリティ評価における「ヒューリスティック評価」とは？",
        ["ユーザーテストの実施", "専門家による設計原則に基づく評価", "統計的分析", "アンケート調査"],
        1,
        "ヒューリスティック評価は、ユーザビリティの専門家が確立された設計原則（ヒューリスティック）に基づいてインターフェースを評価する手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報検索における「適合率」と「再現率」のトレードオフとは？",
        ["両方とも常に向上する", "片方を上げると片方が下がる傾向", "無関係である", "常に同じ値になる"],
        1,
        "適合率（検索結果の正確性）と再現率（関連文書の網羅性）は一般的にトレードオフの関係にあり、片方を上げると片方が下がる傾向があります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "プロジェクトマネジメントにおける「ステークホルダー分析」の目的は？",
        ["費用を削減する", "関係者の影響力と関心を把握する", "スケジュールを短縮する", "技術的問題を解決する"],
        1,
        "ステークホルダー分析は、プロジェクトに関わる全ての関係者を特定し、その影響力と関心の度合いを分析してマネジメント戦略を立てる手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報倫理における「アルゴリズムの透明性」が重要な理由は？",
        ["処理速度の向上", "意思決定の公平性と説明可能性の確保", "コストの削減", "セキュリティの向上"],
        1,
        "アルゴリズムの透明性は、AI システムの意思決定プロセスを理解可能にし、バイアスや差別を防ぎ、公平性と説明責任を確保するために重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの品質管理における「テスト駆動開発（TDD）」の特徴は？",
        ["最後にテストを行う", "テストを先に書いてから実装する", "テストを行わない", "手動テストのみ行う"],
        1,
        "テスト駆動開発では、機能を実装する前にテストコードを書き、そのテストを通すための最小限のコードを実装する開発手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組織学習における「学習する組織」の5つの規律に含まれないものは？",
        ["システム思考", "個人の熟達", "利益の最大化", "共有ビジョン"],
        2,
        "学習する組織の5つの規律は、個人の熟達、メンタルモデル、共有ビジョン、チーム学習、システム思考です。利益の最大化は含まれません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),

    // 問題解決・情報活用 追加問題 (50問)
    new Question(
        "情報検索における「ブール検索」の基本演算子は？",
        ["AND, OR, NOT", "PLUS, MINUS, EQUAL", "INCLUDE, EXCLUDE, MATCH", "FIND, SEARCH, LOCATE"],
        0,
        "ブール検索では、AND（かつ）、OR（または）、NOT（〜でない）の論理演算子を使用して検索条件を組み合わせます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "Webページの信頼性を判断する際に確認すべき項目は？",
        ["見た目の美しさ", "作成者・更新日・引用元", "アクセス数", "広告の数"],
        1,
        "Webページの信頼性は、作成者の身元、情報の更新日、参考文献や引用元の明記などを確認して判断します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "レポート作成における「剽窃（盗用）」を避けるために重要なことは？",
        ["情報源を明記しない", "自分の言葉で要約する", "適切な引用と出典表示", "コピー&ペーストを多用する"],
        2,
        "剽窃を避けるには、他人の文章や考えを使用する際に適切な引用符を使い、出典を明記することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報整理における「分類」の基本原則は？",
        ["重複を許可する", "網羅性と排他性", "時系列順", "アルファベット順"],
        1,
        "情報の分類では、すべての情報を網羅し（網羅性）、重複がないよう（排他性）に分類することが基本原則です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "効果的なプレゼンテーションの構成は？",
        ["詳細→概要→結論", "結論→詳細→概要", "概要→詳細→結論", "結論→概要→詳細"],
        2,
        "効果的なプレゼンテーションは、概要で全体像を示し、詳細で具体的内容を説明し、結論でまとめる構成が基本です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "データ分析における「外れ値」の扱いで適切なものは？",
        ["常に削除する", "常に含める", "原因を調査してから判断する", "無視する"],
        2,
        "外れ値は測定エラーの場合もあれば重要な情報の場合もあるため、原因を調査してから削除するか保持するかを判断します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "チームでの情報共有において重要な要素は？",
        ["情報の独占", "タイムリーな共有", "専門用語の多用", "情報の制限"],
        1,
        "チームでの情報共有では、必要な情報を適切なタイミングで関係者に伝えることが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "問題解決における「仮説思考」の利点は？",
        ["時間をかけて確実に解決する", "効率的に解決の方向性を見つける", "多くの情報を収集する", "複雑な分析を行う"],
        1,
        "仮説思考は、限られた情報から仮説を立てて検証することで、効率的に問題解決の方向性を見つけることができます。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報収集における「セカンダリーリサーチ」とは？",
        ["新しい調査の実施", "既存の情報の収集・分析", "実験の実施", "インタビューの実施"],
        1,
        "セカンダリーリサーチは、既存の文献、統計、調査結果などの二次情報を収集・分析する調査手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "効果的な質問の仕方として適切なのは？",
        ["曖昧で抽象的な質問", "具体的で明確な質問", "長文の複雑な質問", "Yes/Noだけで答えられる質問"],
        1,
        "効果的な質問は、具体的で明確な内容であり、回答者が理解しやすく答えやすい形にすることが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報の視覚化において「認知負荷」を軽減する方法は？",
        ["情報量を最大化する", "色を多用する", "シンプルで理解しやすい表現", "複雑なグラフを使用する"],
        2,
        "認知負荷を軽減するには、情報をシンプルで理解しやすい形で表現し、不要な装飾や複雑さを避けることが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データ分析における「相関関係」と「因果関係」の違いは？",
        ["同じ意味である", "相関は関連性、因果は原因と結果", "相関は強い関係、因果は弱い関係", "相関は数値、因果は文字"],
        1,
        "相関関係は変数間の関連性の強さを示し、因果関係は一方が他方の原因となる関係を示します。相関があっても因果関係があるとは限りません。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "アンケート調査における「回答バイアス」を軽減する方法は？",
        ["誘導的な質問を多用する", "中立的な質問文を使用する", "回答選択肢を制限する", "質問数を増やす"],
        1,
        "回答バイアスを軽減するには、誘導的でない中立的な質問文を使用し、バランスの取れた選択肢を提供することが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロジェクト管理における「クリティカルパス」とは？",
        ["最も重要なタスク", "最長の作業経路", "最短の作業経路", "最も費用のかかる経路"],
        1,
        "クリティカルパスは、プロジェクトの開始から終了までの最も長い作業経路で、プロジェクト全体の所要時間を決定します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報セキュリティにおける「機密性」「完全性」「可用性」の関係は？",
        ["相互に独立している", "相互に関連し合っている", "機密性が最も重要", "可用性が最も重要"],
        1,
        "情報セキュリティのCIA（機密性、完全性、可用性）は相互に関連し合い、バランスを取ることが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "問題解決における「ボトルネック」の特定方法は？",
        ["最も複雑な工程を見つける", "全体の流れを制約する工程を見つける", "最も時間のかかる工程を見つける", "最も費用のかかる工程を見つける"],
        1,
        "ボトルネックは、全体のプロセスの流れを制約し、システム全体の能力を決定する工程です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報可視化における「ダッシュボード」の設計原則は？",
        ["情報を詳細に表示する", "重要な情報を一目で把握できる", "多くの色を使用する", "複雑なグラフを多用する"],
        1,
        "ダッシュボードは、重要な情報を一目で把握できるよう、シンプルで直感的な設計にすることが重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Web検索の効率を向上させる技術として適切なのは？",
        ["キーワードを1つだけ使う", "検索演算子を活用する", "検索結果を最後まで見る", "検索エンジンを頻繁に変える"],
        1,
        "効率的なWeb検索には、AND、OR、NOT、フレーズ検索（\"\"）、サイト内検索（site:）などの検索演算子を活用します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報分析における「パレート分析」の適用例は？",
        ["時系列データの分析", "重要な要因の特定", "相関関係の分析", "統計的検定"],
        1,
        "パレート分析（80-20の法則）は、全体の80%の結果を生み出す20%の重要な要因を特定する分析手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "チーム学習における「対話」と「議論」の違いは？",
        ["同じ意味である", "対話は探求、議論は主張", "対話は感情的、議論は論理的", "対話は個人、議論は集団"],
        1,
        "対話は共に学習し理解を深める探求的な会話、議論は異なる意見を戦わせて結論を出す主張的な会話です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報システムの要件定義における「機能要件」と「非機能要件」の例は？",
        ["機能要件：性能、非機能要件：業務処理", "機能要件：業務処理、非機能要件：性能", "機能要件：セキュリティ、非機能要件：処理速度", "機能要件：可用性、非機能要件：データ処理"],
        1,
        "機能要件は「何をするか」（業務処理、データ処理など）、非機能要件は「どのような品質で」（性能、セキュリティ、可用性など）を定義します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ビジネス分析における「SWOT分析」の4つの要素は？",
        ["強み、弱み、脅威、課題", "強み、弱み、機会、脅威", "目標、戦略、戦術、実行", "人、物、金、情報"],
        1,
        "SWOT分析は、Strengths（強み）、Weaknesses（弱み）、Opportunities（機会）、Threats（脅威）の4つの観点から分析する手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ユーザビリティテストにおける「タスク完了率」の意味は？",
        ["ユーザーが満足した割合", "設定したタスクを完了できたユーザーの割合", "エラーが発生した割合", "時間内に完了した割合"],
        1,
        "タスク完了率は、ユーザビリティテストで設定したタスクを成功裏に完了できたユーザーの割合を示す指標です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報アーキテクチャにおける「カードソーティング」の目的は？",
        ["情報を削除する", "ユーザーの認知モデルに基づく分類を発見する", "情報を暗号化する", "情報を圧縮する"],
        1,
        "カードソーティングは、ユーザーが情報をどのように分類・整理するかを理解し、直感的なナビゲーション構造を設計するための手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プロジェクトマネジメントにおける「スコープクリープ」とは？",
        ["スケジュールの遅延", "プロジェクト範囲の無計画な拡大", "予算の超過", "品質の低下"],
        1,
        "スコープクリープは、プロジェクトの途中で要求や仕様が無計画に追加・変更され、プロジェクト範囲が拡大することです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "知識管理システムにおける「タクソノミー」の役割は？",
        ["知識を削除する", "知識を体系的に分類・整理する", "知識を暗号化する", "知識を圧縮する"],
        1,
        "タクソノミーは、知識や情報を階層的に分類・整理する体系で、知識の検索・活用を効率化します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "複雑系理論における「バタフライ効果」の概念は？",
        ["大きな変化が小さな影響を与える", "小さな変化が大きな影響を与える可能性", "変化が相殺される", "変化が予測可能"],
        1,
        "バタフライ効果は、複雑系において初期条件の小さな変化が、時間の経過とともに大きな影響を与える可能性があることを示します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組織学習における「学習棄却（アンラーニング）」の重要性は？",
        ["新しい知識の獲得", "古い知識や行動パターンの放棄", "知識の蓄積", "経験の活用"],
        1,
        "学習棄却は、環境変化に対応するため、古い知識や行動パターンを意図的に放棄し、新しい学習を可能にするプロセスです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報設計における「アフォーダンス」の概念は？",
        ["情報の量", "オブジェクトが提供する行動の可能性", "情報の品質", "情報の速度"],
        1,
        "アフォーダンスは、オブジェクトや環境がユーザーに対して提供する行動の可能性や機能を示す概念です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "意思決定科学における「満足化」と「最適化」の違いは？",
        ["同じ意味である", "満足化は基準達成、最適化は最良選択", "満足化は感情的、最適化は論理的", "満足化は個人、最適化は組織"],
        1,
        "満足化は一定の基準を満たす選択肢を見つけること、最適化は全ての選択肢の中から最良のものを選ぶことです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報可視化における「視覚的メタファー」の効果は？",
        ["情報を隠蔽する", "馴染みのある概念で理解を促進する", "情報を複雑にする", "処理速度を向上させる"],
        1,
        "視覚的メタファーは、ユーザーが既に知っている概念や物理的な対象を使って、新しい情報やシステムの理解を促進します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組織の知識創造における「ba（場）」の概念は？",
        ["物理的な場所", "知識創造のための共有文脈", "データベース", "会議室"],
        1,
        "「ba（場）」は、個人の知識が共有・結合・創造される物理的、仮想的、心理的な共有文脈を指します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの設計における「Design Thinking」の5段階は？",
        ["計画、設計、実装、テスト、運用", "共感、定義、創造、プロトタイプ、テスト", "分析、設計、開発、実装、保守", "要求、分析、設計、構築、展開"],
        1,
        "Design Thinkingは、共感（Empathize）、定義（Define）、創造（Ideate）、プロトタイプ（Prototype）、テスト（Test）の5段階です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ビッグデータ分析における「次元の呪い」とは？",
        ["データが少なすぎる問題", "高次元データで分析が困難になる現象", "計算時間が短すぎる問題", "データが単純すぎる問題"],
        1,
        "次元の呪いは、データの次元（変数の数）が増加すると、データポイント間の距離が均等化し、従来の分析手法が機能しなくなる現象です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システム開発における「ペアプログラミング」の利点は？",
        ["開発速度の向上", "コード品質の向上と知識共有", "コストの削減", "ドキュメント作成の簡素化"],
        1,
        "ペアプログラミングは、2人の開発者が1つのコードを協力して書くことで、コード品質の向上、知識共有、エラーの早期発見を実現します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組織の情報システム戦略における「IT-Business Alignment」の意味は？",
        ["ITコストの削減", "ITと事業戦略の整合性", "IT人材の確保", "ITシステムの統合"],
        1,
        "IT-Business AlignmentはITと事業戦略の整合性を図り、ITが事業目標の達成に貢献する状態を作ることです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報倫理における「デジタル・ディバイド」の解決策として適切なものは？",
        ["技術の進歩を停止する", "デジタル・インクルージョンの推進", "インターネットの制限", "情報の統制"],
        1,
        "デジタル・ディバイドの解決には、すべての人がICTを利用できる環境を整備するデジタル・インクルージョンの推進が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの監査における「統制」の概念は？",
        ["システムの制御", "リスクを軽減する仕組み", "データの暗号化", "システムの高速化"],
        1,
        "統制は、組織の目標達成を阻害するリスクを軽減・防止するために設計・運用される仕組みや手続きです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ナレッジマネジメントにおける「コミュニティ・オブ・プラクティス」とは？",
        ["公式な組織", "共通の関心事を持つ実践者のコミュニティ", "教育機関", "政府機関"],
        1,
        "コミュニティ・オブ・プラクティスは、共通の関心事や専門分野を持つ人々が知識や経験を共有し、学習し合う実践者コミュニティです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの品質保証における「品質メトリクス」の例は？",
        ["開発者の人数", "コードの行数", "バグ密度、テストカバレッジ", "開発期間"],
        2,
        "品質メトリクスには、バグ密度、テストカバレッジ、循環複雑度、保守性指数などがあり、システムの品質を定量的に測定します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報戦略における「デジタル・トランスフォーメーション」の本質は？",
        ["システムの更新", "デジタル技術による事業・組織の変革", "コストの削減", "自動化の推進"],
        1,
        "デジタル・トランスフォーメーションは、デジタル技術を活用して事業モデル、組織、プロセス、企業文化を根本的に変革することです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの保守における「技術的負債」とは？",
        ["開発費用の借金", "短期的な解決策による将来の保守コスト", "システムの購入費用", "ライセンス料の未払い"],
        1,
        "技術的負債は、短期的な解決策や妥協的な設計により、将来の保守・拡張コストが増大する状態を指します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報管理における「情報ライフサイクル」の段階は？",
        ["作成、利用、削除", "計画、作成、利用、保存、廃棄", "入力、処理、出力", "収集、分析、報告"],
        1,
        "情報ライフサイクルは、情報の計画・作成から利用、保存、最終的な廃棄まで、情報が辿る一連の段階を表します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "組織の情報戦略における「情報ガバナンス」の目的は？",
        ["情報の削除", "情報の適切な管理と活用", "情報の制限", "情報の暗号化"],
        1,
        "情報ガバナンスは、組織が情報を戦略的資産として適切に管理・活用し、リスクを軽減しながら価値を最大化することです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの要求工学における「要求の追跡可能性」とは？",
        ["要求の優先度", "要求の変更履歴と影響範囲の把握", "要求の分類", "要求の検証"],
        1,
        "要求の追跡可能性は、要求の起源から設計・実装・テストまでの関連性を把握し、変更影響を分析できる状態を指します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),

    // 追加問題：情報社会と倫理 (25問)
    new Question(
        "デジタル著作権管理（DRM）の目的は？",
        ["コンテンツの自由な配布", "著作権の保護と不正使用の防止", "ファイルサイズの圧縮", "データの暗号化"],
        1,
        "DRM（Digital Rights Management）は、デジタルコンテンツの著作権を保護し、不正コピーや不正使用を防止する技術です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "フェイクニュースの拡散を防ぐために個人ができることは？",
        ["すべての情報を信じる", "情報源を確認し事実検証する", "感情的に反応して拡散する", "情報を無視する"],
        1,
        "フェイクニュースの拡散を防ぐには、情報源の信頼性を確認し、複数の情報源で事実を検証してから共有することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル格差（デジタル・ディバイド）の主な要因は？",
        ["技術の複雑さのみ", "経済格差、地域格差、技能格差", "年齢差のみ", "言語の違いのみ"],
        1,
        "デジタル格差は、経済格差、地域格差（都市と地方）、デジタル技能の格差など複数の要因により生じます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "SNSでの情報発信において注意すべき法的問題は？",
        ["アクセス数の制限", "名誉毀損、プライバシー侵害", "文字数の制限", "画像の解像度"],
        1,
        "SNSでの情報発信では、他人の名誉を傷つける投稿や、プライバシーを侵害する内容の投稿に法的責任が生じる可能性があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "情報社会における「忘れられる権利」とは？",
        ["記憶を失う権利", "個人情報の削除を求める権利", "情報を隠す権利", "秘密を守る権利"],
        1,
        "忘れられる権利は、インターネット上の個人に関する情報の削除や検索結果からの除外を求める権利です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "企業のデータ収集における「オプトイン」と「オプトアウト」の違いは？",
        ["同じ意味である", "オプトインは事前同意、オプトアウトは事後拒否", "オプトインは無料、オプトアウトは有料", "技術的な違いはない"],
        1,
        "オプトインは事前に明示的な同意を得てからデータ収集を行い、オプトアウトは自動的にデータ収集し後から拒否を可能にする方式です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "AI システムにおける「アルゴリズムバイアス」の問題は？",
        ["処理速度の低下", "不公平な判断や差別的な結果", "データ量の増加", "消費電力の増加"],
        1,
        "アルゴリズムバイアスは、AIシステムが特定の集団に対して不公平な判断を行い、差別的な結果をもたらす問題です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "個人情報保護法における「要配慮個人情報」に含まれるものは？",
        ["氏名、住所", "人種、病歴、犯罪歴", "趣味、嗜好", "職業、年収"],
        1,
        "要配慮個人情報は、人種、信条、社会的身分、病歴、犯罪歴、犯罪被害歴など、差別や偏見の原因となりうる機微な個人情報です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウドサービス利用時のデータ主権に関する課題は？",
        ["データの高速化", "データの保存場所と適用法律の問題", "データの圧縮", "データの可視化"],
        1,
        "クラウドサービスでは、データがどの国に保存されるかによって適用される法律が異なり、データ主権の問題が生じます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル監視社会における市民の権利保護で重要なことは？",
        ["完全な監視の受け入れ", "透明性と適切な監視の確保", "監視技術の禁止", "情報の非開示"],
        1,
        "デジタル監視においては、監視の目的・範囲・方法の透明性を確保し、市民の基本的人権を保護することが重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報社会における「エコーチェンバー効果」とは？",
        ["音響効果", "似た意見のみに触れて偏見が強化される現象", "データの増幅", "情報の反響"],
        1,
        "エコーチェンバー効果は、自分と似た意見や情報にのみ触れることで、既存の信念や偏見が強化される現象です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "企業の情報開示における「透明性レポート」の目的は？",
        ["売上情報の公開", "政府からの情報開示要求の実態公表", "技術仕様の公開", "従業員情報の公開"],
        1,
        "透明性レポートは、政府機関からの情報開示要求やコンテンツ削除要求の件数・対応状況を公表し、透明性を確保する取り組みです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "GDPR（EU一般データ保護規則）の影響を受ける企業の条件は？",
        ["EU域内に本社がある企業のみ", "EU市民のデータを扱う全世界の企業", "大企業のみ", "IT企業のみ"],
        1,
        "GDPRは、所在地に関係なく、EU市民の個人データを処理するすべての企業に適用される包括的なデータ保護規則です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・プラットフォーマーの市場支配力に対する規制の目的は？",
        ["企業利益の最大化", "公正な競争環境の確保", "技術発展の阻害", "データの独占"],
        1,
        "デジタル・プラットフォーマーへの規制は、市場の公正な競争を確保し、イノベーションを促進し、消費者の利益を保護することが目的です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "AIの説明可能性（Explainable AI）が重要な理由は？",
        ["処理速度の向上", "意思決定過程の透明性と信頼性確保", "コストの削減", "データ量の削減"],
        1,
        "AI の説明可能性は、AI システムの意思決定過程を人間が理解できるようにし、透明性、信頼性、説明責任を確保するために重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル遺産（デジタル・レガシー）の管理における課題は？",
        ["データの高速化", "故人のデジタル資産の承継と管理", "データの圧縮", "システムの更新"],
        1,
        "デジタル遺産の管理では、故人のSNSアカウント、デジタル資産、個人データの承継方法や管理責任が課題となります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "量子コンピュータの実用化が暗号化技術に与える影響は？",
        ["暗号化の高速化", "現在の暗号化手法の脆弱化", "暗号化コストの削減", "暗号化の簡素化"],
        1,
        "量子コンピュータは現在広く使用されているRSA暗号などを解読する能力を持つため、量子耐性暗号の開発が急務となっています。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・ヒューマニティーズが目指すものは？",
        ["技術の発展", "人文学とデジタル技術の融合", "データの蓄積", "システムの効率化"],
        1,
        "デジタル・ヒューマニティーズは、人文学研究にデジタル技術を活用し、新しい知見や研究手法を開発する学際的分野です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報倫理における「技術的中立性」の限界は？",
        ["技術は完全に中立である", "技術の設計や使用には価値観が反映される", "技術に倫理は不要", "技術は人間を超越している"],
        1,
        "技術は設計思想や利用方法に開発者や利用者の価値観が反映されるため、完全に中立的ではなく、倫理的配慮が必要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・デモクラシーの課題として挙げられるものは？",
        ["参加者の増加", "情報操作やフィルターバブルの影響", "技術コストの削減", "システムの高速化"],
        1,
        "デジタル・デモクラシーでは、フェイクニュース、情操作、フィルターバブル、デジタル格差などが民主的プロセスに影響を与える課題があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "国際的なサイバーセキュリティ協力における「タリン・マニュアル」の意義は？",
        ["技術仕様の標準化", "サイバー戦争に関する国際法の指針", "ソフトウェア開発の指針", "データ保護の規則"],
        1,
        "タリン・マニュアルは、サイバー戦争やサイバー攻撃に既存の国際法がどのように適用されるかを示した専門家による研究成果です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・リテラシー教育における「批判的思考」の重要性は？",
        ["情報の暗記", "情報の真偽や価値を判断する能力の育成", "技術操作の習得", "データ入力の高速化"],
        1,
        "デジタル・リテラシー教育では、情報を鵜呑みにせず、その真偽や価値を批判的に判断し、適切に活用する能力の育成が重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "企業のAI活用における「AI倫理委員会」の役割は？",
        ["利益の最大化", "AI開発・運用の倫理的ガイドライン策定", "コスト削減", "技術の高度化"],
        1,
        "AI倫理委員会は、AI技術の開発・運用において倫理的な問題を検討し、ガイドラインの策定や倫理的判断を行う組織です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報社会における「デジタル主権」の概念は？",
        ["技術の独占", "国家がデジタル領域における主権を確保する", "企業の権利拡大", "個人の権利制限"],
        1,
        "デジタル主権は、国家がデジタル技術とデータに関する政策決定権を保持し、外国からの依存や影響を制限する概念です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル社会における「包摂性（インクルージョン）」実現のための取り組みは？",
        ["技術の複雑化", "誰もがデジタル技術を利用できる環境整備", "利用者の制限", "コストの増加"],
        1,
        "デジタル・インクルージョンでは、年齢、障害、経済状況に関係なく、すべての人がデジタル技術の恩恵を受けられる環境整備が重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),

    // 追加問題：デジタル情報基礎 (30問)
    new Question(
        "コンピュータで負の数を表現する「2の補数」の特徴は？",
        ["最上位ビットが符号ビット", "計算が複雑", "メモリを多く消費", "精度が低い"],
        0,
        "2の補数表現では最上位ビットが符号ビット（0が正、1が負）となり、加算と減算を同じ回路で処理できる利点があります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Unicode（UTF-8）の特徴は？",
        ["ASCII文字のみサポート", "固定長エンコーディング", "可変長で多言語サポート", "数値のみサポート"],
        2,
        "UTF-8は可変長エンコーディングで、ASCII文字は1バイト、日本語などは3バイトで表現し、世界中の文字を統一的に扱えます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル画像の「解像度」と「色深度」の関係は？",
        ["反比例する", "正比例する", "独立した概念", "同じ意味"],
        2,
        "解像度（画素数）と色深度（1画素あたりのビット数）は独立した概念で、両方がファイルサイズと画質に影響します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "音声データのサンプリング定理（ナイキスト定理）によると、正確に復元するための条件は？",
        ["サンプリング周波数 > 最高周波数", "サンプリング周波数 ≥ 2×最高周波数", "サンプリング周波数 = 最高周波数", "サンプリング周波数 < 最高周波数"],
        1,
        "サンプリング定理により、アナログ信号を正確にデジタル化するには、最高周波数の2倍以上のサンプリング周波数が必要です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データ圧縮における「エントロピー」の概念は？",
        ["データの重要度", "情報の理論的最小ビット数", "圧縮率の上限", "データの品質"],
        1,
        "エントロピーは情報理論において、データを表現するのに理論的に必要な最小のビット数を示し、圧縮の限界を表します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),

    // デジタル情報基礎 追加問題 続き (25問)
    new Question(
        "ハフマン符号化の特徴は？",
        ["固定長符号", "出現頻度に基づく可変長符号", "ランレングス符号", "辞書式符号"],
        1,
        "ハフマン符号化は、出現頻度の高い文字に短い符号を割り当てる可変長符号化で、データを効率的に圧縮します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル署名の役割は？",
        ["データの圧縮", "送信者の認証とデータの完全性保証", "データの暗号化", "アクセス制御"],
        1,
        "デジタル署名は、送信者の身元確認（認証）とデータが改ざんされていないこと（完全性）を保証する技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "QRコードの特徴は？",
        ["1次元バーコード", "数字のみ格納可能", "2次元コードで大容量データ格納", "色情報を含む"],
        2,
        "QRコード（Quick Response Code）は2次元バーコードで、文字、数字、バイナリデータなど大容量の情報を格納できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル画像の「アルファチャンネル」の用途は？",
        ["色の強度", "透明度の表現", "画像の回転", "圧縮率の制御"],
        1,
        "アルファチャンネルは画像の透明度を表現するために使用され、背景の透過や半透明効果を実現します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "バイナリデータの「ビッグエンディアン」と「リトルエンディアン」の違いは？",
        ["データサイズの違い", "バイトの格納順序の違い", "圧縮方式の違い", "暗号化方式の違い"],
        1,
        "エンディアンはマルチバイトデータの格納順序を表し、ビッグエンディアンは上位バイトから、リトルエンディアンは下位バイトから格納します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル音楽ファイルの「ビットレート」とは？",
        ["音の高さ", "1秒間のデータ量", "音の長さ", "ファイルサイズ"],
        1,
        "ビットレートは1秒間に処理されるデータ量（bps）を表し、音質とファイルサイズに直接影響します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ベクター画像とビットマップ画像の主な違いは？",
        ["色数の違い", "数式と画素の違い", "ファイル形式の違い", "解像度の違い"],
        1,
        "ベクター画像は数式で図形を表現し拡大縮小で劣化せず、ビットマップ画像は画素の集合で写真に適しています。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "チェックサム（checksum）の目的は？",
        ["データの圧縮", "データの完全性確認", "データの暗号化", "データの高速化"],
        1,
        "チェックサムは、データ転送や保存時にエラーが発生していないかを確認するための検証値です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Base64エンコーディングの用途は？",
        ["データの圧縮", "バイナリデータのテキスト表現", "データの暗号化", "データの高速化"],
        1,
        "Base64は、バイナリデータを64個のASCII文字で表現し、テキストベースのプロトコルでバイナリデータを安全に転送するために使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル証明書の役割は？",
        ["データの圧縮", "公開鍵の正当性保証", "アクセス速度向上", "メモリ使用量削減"],
        1,
        "デジタル証明書は、公開鍵暗号方式において公開鍵の正当性を第三者機関（認証局）が保証する電子文書です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "HTMLにおけるメタデータの役割は？",
        ["画像の表示", "ページの付加情報", "スタイルの指定", "スクリプトの実行"],
        1,
        "HTMLのメタデータは、ページの文字エンコーディング、説明、キーワードなど、ブラウザや検索エンジンが使用する付加情報を提供します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "IPアドレスのサブネットマスクの目的は？",
        ["セキュリティ強化", "ネットワーク部とホスト部の識別", "通信速度向上", "データ圧縮"],
        1,
        "サブネットマスクは、IPアドレスをネットワーク部とホスト部に分割し、効率的なルーティングとネットワーク管理を可能にします。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "CSSにおける「カスケード」の概念は？",
        ["階層的なスタイル継承", "画像の重ね合わせ", "データの流れ", "エラーの連鎖"],
        0,
        "CSSのカスケードは、複数のスタイルルールが競合する場合の優先順位と継承の仕組みを指します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "JavaScriptにおける「非同期処理」の利点は？",
        ["コードの簡素化", "UI のブロッキング回避", "メモリ使用量削減", "実行速度向上"],
        1,
        "非同期処理により、時間のかかる処理中でもUIをブロックせず、ユーザーの操作に応答し続けることができます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "レスポンシブWebデザインの主な技術要素は？",
        ["固定レイアウト", "フレキシブルグリッド、メディアクエリ", "Flash技術", "固定フォントサイズ"],
        1,
        "レスポンシブWebデザインは、フレキシブルグリッド、柔軟な画像、メディアクエリを使用してデバイスに適応します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Webアクセシビリティの「WCAG」ガイドラインの4つの原則は？",
        ["速度、品質、安全、効率", "知覚可能、操作可能、理解可能、堅牢", "設計、開発、テスト、運用", "計画、実行、評価、改善"],
        1,
        "WCAGの4原則は、知覚可能（Perceivable）、操作可能（Operable）、理解可能（Understandable）、堅牢（Robust）です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "HTTP/HTTPSプロトコルにおける「ステートレス」の特徴は？",
        ["状態を保持する", "各リクエストが独立", "セッション管理が自動", "データが永続化される"],
        1,
        "HTTPはステートレスプロトコルで、各リクエストは独立しており、サーバーは前回のリクエストの状態を記憶しません。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "XMLの特徴として正しいものは？",
        ["表示専用言語", "自己記述的なマークアップ言語", "プログラミング言語", "画像形式"],
        1,
        "XMLは自己記述的なマークアップ言語で、データの構造と意味を同時に表現でき、システム間のデータ交換に使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Web APIにおける「REST」の設計原則は？",
        ["複雑な処理手順", "リソース指向とHTTPメソッド活用", "独自プロトコル使用", "状態保持必須"],
        1,
        "RESTは、リソースをURL で表現し、HTTPメソッド（GET、POST、PUT、DELETE）を適切に使用する設計原則です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "SQLiteの特徴は？",
        ["大規模企業向けDB", "サーバーレスの軽量DB", "NoSQLデータベース", "クラウド専用DB"],
        1,
        "SQLiteは、サーバーを必要としない軽量なリレーショナルデータベースで、アプリケーションに組み込んで使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "正規表現（Regular Expression）の主な用途は？",
        ["数値計算", "パターンマッチングと文字列処理", "画像処理", "音声処理"],
        1,
        "正規表現は、文字列のパターンを表現する記法で、検索、置換、入力検証などの文字列処理に広く使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "GitにおけるBranch（ブランチ）の概念は？",
        ["ファイルの複製", "開発の並行作業線", "データの分割", "システムの分散"],
        1,
        "Gitのブランチは、メインの開発ラインから分岐して独立した開発作業を行い、後で統合できる仕組みです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クロスサイトスクリプティング（XSS）攻撃の対策は？",
        ["SQLインジェクション対策", "入力値のサニタイジング", "パスワード強化", "ファイアウォール設定"],
        1,
        "XSS攻撃の対策には、ユーザー入力のサニタイジング（無害化）とコンテンツセキュリティポリシー（CSP）の実装が重要です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "Dockerコンテナ技術の利点は？",
        ["OSの完全仮想化", "軽量で移植性の高いアプリケーション実行環境", "ハードウェアの抽象化", "ネットワークの高速化"],
        1,
        "Dockerは、アプリケーションとその依存関係をコンテナにパッケージ化し、異なる環境で一貫して実行できる軽量な仮想化技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "マイクロサービスアーキテクチャの特徴は？",
        ["単一の大きなアプリケーション", "小さな独立したサービスの組み合わせ", "モノリシックな構造", "中央集権的な管理"],
        1,
        "マイクロサービスアーキテクチャは、アプリケーションを小さな独立したサービスに分割し、それぞれが独立して開発・展開できる設計手法です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),

    // 追加問題：ネットワークとセキュリティ (30問)
    new Question(
        "VPN（Virtual Private Network）の主な目的は？",
        ["通信速度の向上", "安全な通信の確保", "コストの削減", "データの圧縮"],
        1,
        "VPNは、インターネット上に仮想的なプライベートネットワークを構築し、暗号化により安全な通信を実現します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "ファイアウォールの基本機能は？",
        ["データの圧縮", "不正アクセスの遮断", "処理速度の向上", "メモリの最適化"],
        1,
        "ファイアウォールは、設定されたセキュリティルールに基づいて、ネットワークトラフィックを監視し、不正アクセスを遮断します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "公開鍵暗号方式の特徴は？",
        ["同じ鍵で暗号化・復号化", "異なる鍵で暗号化・復号化", "鍵が不要", "暗号化のみ可能"],
        1,
        "公開鍵暗号方式では、暗号化用の公開鍵と復号化用の秘密鍵が異なるペアを使用し、鍵の配布問題を解決します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "SSL/TLS証明書の役割は？",
        ["データの圧縮", "サーバーの身元確認と通信の暗号化", "アクセス速度向上", "ログの管理"],
        1,
        "SSL/TLS証明書は、Webサーバーの身元を証明し、ブラウザとサーバー間の通信を暗号化して安全性を確保します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "DNSスプーフィング攻撃の対策は？",
        ["パスワードの強化", "DNS over HTTPS（DoH）の利用", "ファイアウォールの設定", "ウイルス対策ソフト"],
        1,
        "DNSスプーフィング対策には、DNS over HTTPS（DoH）やDNS over TLS（DoT）による暗号化通信が効果的です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ゼロトラストセキュリティの基本概念は？",
        ["完全な信頼", "何も信頼せず常に検証", "内部ネットワークの信頼", "外部のみ検証"],
        1,
        "ゼロトラストは「信頼するな、検証せよ」の原則に基づき、ネットワーク内外問わずすべてのアクセスを検証するセキュリティモデルです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),

    // ネットワークとセキュリティ 追加問題 続き (24問)
    new Question(
        "多要素認証（MFA）の要素として正しい組み合わせは？",
        ["パスワードとID", "知識、所有、生体", "ソフトウェアとハードウェア", "有線と無線"],
        1,
        "多要素認証は、知識（パスワード）、所有（トークン）、生体（指紋）の異なる要素を組み合わせてセキュリティを強化します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "DDoS攻撃の対策として効果的なのは？",
        ["パスワード変更", "CDNとレート制限", "データ暗号化", "ファイル圧縮"],
        1,
        "DDoS攻撃対策には、CDN（コンテンツ配信ネットワーク）による負荷分散とレート制限による接続数制御が効果的です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ブロックチェーンにおける「ハッシュ関数」の役割は？",
        ["データの圧縮", "ブロックの完全性保証", "通信の高速化", "容量の削減"],
        1,
        "ブロックチェーンでは、ハッシュ関数によりブロックの完全性を保証し、改ざんを検出する仕組みを実現しています。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ペネトレーションテストの目的は？",
        ["システムの高速化", "脆弱性の発見", "データの整理", "コストの削減"],
        1,
        "ペネトレーションテストは、実際の攻撃を模擬してシステムの脆弱性を発見し、セキュリティレベルを評価する手法です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "SOC（Security Operations Center）の役割は？",
        ["ソフトウェア開発", "セキュリティ監視と対応", "データ分析", "システム運用"],
        1,
        "SOCは、24時間体制でサイバーセキュリティ脅威の監視、検出、分析、対応を行う専門組織です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "SIEM（Security Information and Event Management）システムの機能は？",
        ["データ圧縮", "セキュリティイベントの統合分析", "ファイル管理", "通信高速化"],
        1,
        "SIEMは、複数のセキュリティツールからのログとイベントを統合し、相関分析により脅威を検出するシステムです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "EDR（Endpoint Detection and Response）の特徴は？",
        ["ネットワーク監視", "エンドポイントの行動分析", "メール保護", "Web フィルタリング"],
        1,
        "EDRは、PC やサーバーなどのエンドポイントの行動を監視し、高度な脅威の検出と対応を行うセキュリティソリューションです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サンドボックス技術の目的は？",
        ["データ保存", "安全な環境での実行・分析", "通信の暗号化", "アクセス制御"],
        1,
        "サンドボックスは、疑わしいファイルやプログラムを隔離された安全な環境で実行し、その動作を分析する技術です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "暗号化における「鍵管理」で重要なことは？",
        ["鍵の公開", "鍵のライフサイクル管理", "鍵の固定化", "鍵の単純化"],
        1,
        "暗号化において、鍵の生成、配布、保管、更新、廃棄までのライフサイクル全体を適切に管理することが重要です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "APT（Advanced Persistent Threat）攻撃の特徴は？",
        ["短期間の攻撃", "長期潜伏型の標的攻撃", "ランダムな攻撃", "自動化された攻撃"],
        1,
        "APT攻撃は、特定の組織を狙い、長期間にわたってシステムに潜伏し、機密情報を窃取する高度で持続的な脅威です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "CSIRTの主な活動は？",
        ["ソフトウェア開発", "インシデント対応", "マーケティング", "人事管理"],
        1,
        "CSIRT（Computer Security Incident Response Team）は、サイバーセキュリティインシデントの予防、検出、対応、復旧を行う専門チームです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "WAF（Web Application Firewall）の機能は？",
        ["OS の保護", "Webアプリケーションの保護", "メール保護", "ファイル共有保護"],
        1,
        "WAFは、WebアプリケーションとWebサーバー間の通信を監視し、SQLインジェクションやXSS攻撃などから保護します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタルフォレンジックの目的は？",
        ["データ復旧", "犯罪捜査のための証拠収集", "システム最適化", "バックアップ作成"],
        1,
        "デジタルフォレンジックは、サイバー犯罪の捜査において、デジタル機器から法的証拠となるデータを適切に収集・分析する技術です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "IDS（Intrusion Detection System）の役割は？",
        ["侵入の防止", "侵入の検知", "データの暗号化", "通信の高速化"],
        1,
        "IDS は、ネットワークやシステムへの不正侵入を検知し、管理者に警告するセキュリティシステムです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハニーポット技術の目的は？",
        ["正規利用者の利便性向上", "攻撃者の誘引と情報収集", "データの高速化", "コストの削減"],
        1,
        "ハニーポットは、攻撃者を誘引するおとりシステムで、攻撃手法の分析や早期警告に利用されます。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "PKI（Public Key Infrastructure）の構成要素は？",
        ["CA、証明書、CRL", "DNS、DHCP、NAT", "TCP、UDP、IP", "HTML、CSS、JavaScript"],
        0,
        "PKIは、認証局（CA）、デジタル証明書、証明書失効リスト（CRL）などで構成される公開鍵暗号の基盤です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "セキュリティ監査における「リスクアセスメント」の目的は？",
        ["コストの削減", "脅威と脆弱性の評価", "システムの高速化", "データの整理"],
        1,
        "リスクアセスメントは、組織の情報資産に対する脅威と脆弱性を特定・評価し、適切な対策を決定するプロセスです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報セキュリティポリシーの策定における重要な要素は？",
        ["技術的詳細", "組織全体のガバナンス", "個人の裁量", "コスト最優先"],
        1,
        "情報セキュリティポリシーは、組織全体のセキュリティガバナンスを確立し、一貫した方針を示す重要な文書です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "GDPR における「データ保護影響評価（DPIA）」の目的は？",
        ["コスト削減", "高リスク処理の事前評価", "処理速度向上", "データ容量削減"],
        1,
        "DPIAは、個人データの処理が個人の権利・自由に高いリスクをもたらす可能性がある場合に実施される事前評価です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "量子暗号通信の原理は？",
        ["数学的計算の複雑さ", "量子力学の不確定性原理", "大容量メモリ", "高速プロセッサ"],
        1,
        "量子暗号通信は、量子力学の不確定性原理により、盗聴が行われると必ず検出される、理論的に破られない暗号通信です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "セキュリティ・バイ・デザインの概念は？",
        ["後付けセキュリティ", "設計段階からのセキュリティ組み込み", "最小限のセキュリティ", "コスト重視の設計"],
        1,
        "セキュリティ・バイ・デザインは、システムの設計段階からセキュリティを組み込み、根本的な安全性を確保する考え方です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "DevSecOps の目的は？",
        ["開発の高速化のみ", "開発プロセスにセキュリティを統合", "運用コストの削減", "テストの自動化"],
        1,
        "DevSecOpsは、開発（Dev）、セキュリティ（Sec）、運用（Ops）を統合し、セキュアなソフトウェア開発ライフサイクルを実現します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "CVSS（Common Vulnerability Scoring System）の目的は？",
        ["脆弱性の発見", "脆弱性の深刻度評価", "脆弱性の修正", "脆弱性の分類"],
        1,
        "CVSSは、脆弱性の深刻度を数値化して評価し、組織が対応の優先順位を決定するための標準的な評価システムです。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サイバーレジリエンスの概念は？",
        ["攻撃の完全防止", "攻撃を受けても迅速に回復する能力", "コストの最小化", "技術の高度化"],
        1,
        "サイバーレジリエンスは、サイバー攻撃を受けても事業継続性を維持し、迅速に回復できる組織の能力を指します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),

    // 追加問題：各カテゴリ総合 (104問)
    new Question(
        "IoT（Internet of Things）デバイスのセキュリティ課題は？",
        ["高性能化", "デフォルトパスワードと更新困難性", "大容量化", "高速化"],
        1,
        "IoT デバイスは、デフォルトパスワードの使用、ファームウェア更新の困難さ、リソース制約によるセキュリティ機能の制限が課題です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "エッジコンピューティングの利点は？",
        ["中央集権化", "レイテンシの削減", "コストの増加", "複雑性の向上"],
        1,
        "エッジコンピューティングは、データ処理をユーザーに近い場所で行うことで、レイテンシを削減し、リアルタイム処理を可能にします。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "5G通信技術の特徴は？",
        ["低速大容量", "高速低遅延大容量", "低速低遅延", "高速高遅延"],
        1,
        "5G は、高速（最大10Gbps）、低遅延（1ms以下）、大容量（多数同時接続）の3つの特徴を持つ次世代通信技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウドコンピューティングの「SaaS」モデルの特徴は？",
        ["インフラ提供", "プラットフォーム提供", "ソフトウェア提供", "ハードウェア提供"],
        2,
        "SaaS（Software as a Service）は、インターネット経由でソフトウェア機能を提供するクラウドサービスモデルです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "機械学習における「教師あり学習」の例は？",
        ["クラスタリング", "分類、回帰", "次元削減", "異常検知"],
        1,
        "教師あり学習は、正解ラベル付きデータで学習し、分類（カテゴリ予測）や回帰（数値予測）を行う機械学習手法です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ビッグデータの「3V」とは？",
        ["Volume、Velocity、Variety", "Value、Version、Validity", "Visual、Virtual、Verbal", "Vast、Variable、Versatile"],
        0,
        "ビッグデータの3Vは、Volume（量）、Velocity（速度）、Variety（多様性）を指し、従来のデータベースでは処理困難な特徴を表します。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "アジャイル開発の「スクラム」における「スプリント」とは？",
        ["最終成果物", "短期間の開発サイクル", "要件定義", "テスト手法"],
        1,
        "スプリントは、スクラムにおける1-4週間の短期間開発サイクルで、動作するソフトウェアの増分を生産します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "UX（User Experience）デザインにおける「ペルソナ」の役割は？",
        ["システム設計", "典型的ユーザーの具体化", "データ分析", "プログラミング"],
        1,
        "ペルソナは、実際の調査データに基づいて作成された典型的ユーザーの具体的な人物像で、ユーザー中心の設計を支援します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データベースの「ACID特性」とは？",
        ["Accuracy、Consistency、Integrity、Durability", "Atomicity、Consistency、Isolation、Durability", "Access、Control、Integration、Distribution", "Analysis、Compression、Indexing、Documentation"],
        1,
        "ACID特性は、トランザクション処理の信頼性を保証する4つの性質：原子性、一貫性、独立性、永続性を表します。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの「可用性」を向上させる手法は？",
        ["セキュリティ強化", "冗長化とフェイルオーバー", "処理速度向上", "コスト削減"],
        1,
        "可用性向上には、システムの冗長化、フェイルオーバー機能、定期的な保守、適切な監視が重要です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタルツイン技術の概念は？",
        ["仮想現実", "物理世界のデジタル複製", "拡張現実", "人工知能"],
        1,
        "デジタルツインは、物理的なオブジェクトやシステムのデジタル複製を作成し、リアルタイムでシミュレーションや分析を行う技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ブロックチェーンの「スマートコントラクト」とは？",
        ["法的契約書", "自動実行されるプログラム", "暗号化手法", "データベース"],
        1,
        "スマートコントラクトは、契約の条件をプログラムコードで記述し、ブロックチェーン上で自動実行される仕組みです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "AR（拡張現実）とVR（仮想現実）の違いは？",
        ["同じ技術", "ARは現実に情報重畳、VRは完全仮想空間", "ARは仮想、VRは現実", "処理速度の違い"],
        1,
        "ARは現実世界にデジタル情報を重ね合わせ、VRは完全にデジタルな仮想空間をユーザーに提供する技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "ノーコード・ローコード開発の利点は？",
        ["高度な技術が必要", "非技術者でも開発可能", "コストが高い", "時間がかかる"],
        1,
        "ノーコード・ローコード開発は、視覚的なインターフェースにより、プログラミング知識の少ない人でもアプリケーション開発を可能にします。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "サイバーフィジカルシステム（CPS）の特徴は？",
        ["物理とデジタルの分離", "物理とデジタルの統合", "デジタルのみ", "物理のみ"],
        1,
        "CPSは、物理世界とサイバー世界を密結合し、センサーとアクチュエーターを通じてリアルタイムで相互作用するシステムです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "API（Application Programming Interface）の役割は？",
        ["ユーザーインターフェース", "システム間の連携仕様", "データベース管理", "セキュリティ機能"],
        1,
        "APIは、異なるソフトウェアシステムが相互に連携するためのインターフェース仕様で、データ交換や機能利用を可能にします。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "DevOps文化における「継続的インテグレーション（CI）」の目的は？",
        ["手動テストの推進", "コード変更の頻繁な統合とテスト", "開発の分離", "リリースの延期"],
        1,
        "CI は、開発者のコード変更を頻繁にメインブランチに統合し、自動テストにより問題を早期発見する開発手法です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データウェアハウスとデータレイクの違いは？",
        ["同じもの", "構造化データ vs 非構造化データ中心", "サイズの違い", "速度の違い"],
        1,
        "データウェアハウスは構造化データの統合ストレージ、データレイクは構造化・非構造化問わず大量データを保存する仕組みです。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報システムの「災害復旧計画（DRP）」の目的は？",
        ["システム性能向上", "災害時の事業継続", "コスト削減", "セキュリティ強化"],
        1,
        "DRPは、災害や障害時にITシステムを迅速に復旧し、事業継続性を確保するための計画です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "機械学習における「過学習（オーバーフィッティング）」とは？",
        ["学習不足", "訓練データに過度に適応", "処理速度低下", "メモリ不足"],
        1,
        "過学習は、モデルが訓練データに過度に適応し、新しいデータに対する汎化性能が低下する現象です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "クラウドネイティブアプリケーションの特徴は？",
        ["従来サーバー前提", "クラウド環境特化設計", "オンプレミス専用", "単一サーバー動作"],
        1,
        "クラウドネイティブアプリケーションは、マイクロサービス、コンテナ、スケーラビリティなどクラウドの特性を活用して設計されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報セキュリティの「CIA」トライアドで「可用性」が侵害される例は？",
        ["データの漏洩", "システムの停止", "データの改ざん", "パスワードの解読"],
        1,
        "可用性（Availability）の侵害は、システムの停止、サービス拒否攻撃（DoS）、機器の故障などにより発生します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Basic
    ),
    new Question(
        "RPA（Robotic Process Automation）の適用領域は？",
        ["創造的業務", "定型的な反復業務", "意思決定業務", "対人コミュニケーション"],
        1,
        "RPAは、ルールベースで定型的な反復業務を自動化するのに適しており、データ入力、転記、レポート作成などに活用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "データガバナンスにおける「データスチュワード」の役割は？",
        ["システム開発", "データ品質の管理責任", "ハードウェア保守", "ネットワーク管理"],
        1,
        "データスチュワードは、特定のデータドメインについてデータ品質、整合性、セキュリティの管理責任を持つ役割です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "アジャイル開発における「ユーザーストーリー」の形式は？",
        ["技術仕様書", "「〜として、〜したい、なぜなら〜」", "テストケース", "システム設計図"],
        1,
        "ユーザーストーリーは「〜として（役割）、〜したい（機能）、なぜなら〜（価値）」の形式で要求を表現します。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報システムの「スケーラビリティ」における「水平スケーリング」とは？",
        ["CPU性能向上", "サーバー台数増加", "メモリ容量増加", "ストレージ高速化"],
        1,
        "水平スケーリング（スケールアウト）は、サーバーの台数を増やして処理能力を向上させる手法です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル・エシックス（Digital Ethics）で考慮すべき要素は？",
        ["技術効率のみ", "プライバシー、公平性、透明性", "コストのみ", "速度のみ"],
        1,
        "デジタル・エシックスでは、プライバシー保護、アルゴリズムの公平性、意思決定の透明性、責任ある技術利用が重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ヒューマンコンピュータインタラクション（HCI）の目標は？",
        ["技術の複雑化", "使いやすいシステムの設計", "処理速度の最大化", "コストの最小化"],
        1,
        "HCIは、人間とコンピュータの相互作用を研究し、使いやすく効果的なユーザーインターフェースの設計を目標とします。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "オープンソースソフトウェアの特徴は？",
        ["ソースコード非公開", "ソースコード公開と改変自由", "商用利用禁止", "単一企業による開発"],
        1,
        "オープンソースソフトウェアは、ソースコードが公開され、自由に使用、改変、再配布できるライセンスのソフトウェアです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "AI の「説明可能性」が重要な分野は？",
        ["ゲーム", "医療診断、金融審査", "音楽再生", "画像圧縮"],
        1,
        "医療診断、金融審査、法執行など、AIの判断が人の人生に大きく影響する分野では説明可能性が特に重要です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システム監査における「統制テスト」の目的は？",
        ["システム性能測定", "内部統制の有効性確認", "セキュリティ侵害検出", "コスト分析"],
        1,
        "統制テストは、設計された内部統制が実際に有効に機能しているかを確認するテストです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データマイニングにおける「アソシエーション分析」の用途は？",
        ["時系列予測", "購買パターンの発見", "画像認識", "音声処理"],
        1,
        "アソシエーション分析は、「Aを購入した人はBも購入する傾向がある」といった項目間の関連性を発見する手法です。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "プライバシー・バイ・デザインの7原則に含まれるものは？",
        ["事後対応", "事前的・積極的", "受動的対応", "最小限の対応"],
        1,
        "プライバシー・バイ・デザインは、事前的・積極的、デフォルトでのプライバシー保護、プライバシーの組み込み設計などの原則があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ソフトウェア品質における「テストカバレッジ」とは？",
        ["テスト時間", "テストで実行されたコードの割合", "テスト人数", "テスト費用"],
        1,
        "テストカバレッジは、テストによって実行されたソースコードの割合を示し、テストの網羅性を測る指標です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "インフラストラクチャ・アズ・コード（IaC）の利点は？",
        ["手動設定の推進", "インフラの自動化と再現性", "複雑化の促進", "コスト増加"],
        1,
        "IaCは、インフラストラクチャをコードで定義し、自動化、バージョン管理、再現性の確保を可能にします。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "カンバン方式の基本原則は？",
        ["大量生産", "ジャストインタイム", "在庫最大化", "計画経済"],
        1,
        "カンバン方式は、必要な時に必要な分だけ生産するジャストインタイムの考え方に基づく生産管理システムです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ゼロ知識証明の概念は？",
        ["すべて公開", "秘密情報を明かさずに知識を証明", "部分的公開", "暗号化"],
        1,
        "ゼロ知識証明は、秘密の情報自体を相手に教えることなく、その秘密を知っていることを証明する暗号技術です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "エンタープライズアーキテクチャ（EA）の目的は？",
        ["技術の複雑化", "組織全体のIT戦略整合", "個別システム最適化", "コスト増加"],
        1,
        "EAは、組織全体のビジネス戦略とIT戦略を整合させ、効率的なシステム構成を実現するフレームワークです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "フォグコンピューティングの特徴は？",
        ["中央集権処理", "エッジとクラウドの中間層処理", "クラウドのみ処理", "ローカルのみ処理"],
        1,
        "フォグコンピューティングは、エッジデバイスとクラウドの中間に処理層を設け、効率的な分散処理を実現します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データ・リニエージの目的は？",
        ["データ圧縮", "データの系譜追跡", "データ暗号化", "データ削除"],
        1,
        "データ・リニエージは、データの起源から変換、移動、利用までの系譜を追跡し、データガバナンスを支援します。",
        QuestionCategory.DataUtilizationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サーバーレスコンピューティングの特徴は？",
        ["専用サーバー必要", "イベント駆動の関数実行", "24時間稼働", "大容量メモリ"],
        1,
        "サーバーレスコンピューティングは、イベント発生時にのみ関数が実行され、リソースの効率的な利用が可能です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・サプライチェーンの利点は？",
        ["物理的配送のみ", "エンドツーエンドの可視性", "在庫増加", "手動処理"],
        1,
        "デジタル・サプライチェーンは、IoT、AI、ブロックチェーンにより、全体的な可視性と最適化を実現します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの「相互運用性」とは？",
        ["独立動作", "異なるシステム間の連携能力", "高性能化", "低コスト化"],
        1,
        "相互運用性は、異なるシステムやサービスが相互に情報を交換し、連携して動作する能力です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "コンテナオーケストレーション（Kubernetes等）の役割は？",
        ["単一コンテナ管理", "複数コンテナの自動管理", "データベース専用", "UI作成"],
        1,
        "コンテナオーケストレーションは、複数のコンテナの配備、スケーリング、管理を自動化するプラットフォームです。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報セキュリティにおける「脅威モデリング」の目的は？",
        ["システム高速化", "潜在的脅威の体系的分析", "コスト削減", "機能追加"],
        1,
        "脅威モデリングは、システムに対する潜在的な脅威を体系的に特定・分析し、適切な対策を検討する手法です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・ファブリケーション（3Dプリンター等）の社会的影響は？",
        ["大量生産促進", "分散製造とカスタマイゼーション", "標準化推進", "中央集権化"],
        1,
        "デジタル・ファブリケーションは、個人や小規模企業による分散製造とマスカスタマイゼーションを可能にします。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ディープフェイク技術による社会的課題は？",
        ["技術の進歩", "偽情報の精巧化", "エンターテインメント向上", "コスト削減"],
        1,
        "ディープフェイク技術は、極めて精巧な偽の動画・音声を作成でき、偽情報拡散や名誉毀損に悪用される懸念があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "スマートシティの構成要素は？",
        ["従来インフラのみ", "IoT、AI、ビッグデータの統合", "人力システム", "アナログ技術"],
        1,
        "スマートシティは、IoT、AI、ビッグデータ、5G等の技術を統合し、効率的で持続可能な都市運営を目指します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル通貨（CBDC）の特徴は？",
        ["民間発行", "中央銀行発行のデジタル法定通貨", "暗号通貨", "地域通貨"],
        1,
        "CBDC（Central Bank Digital Currency）は、中央銀行が発行するデジタル形式の法定通貨です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムにおける「レガシーシステム」の課題は？",
        ["最新技術", "老朽化による保守困難", "高性能", "低コスト"],
        1,
        "レガシーシステムは、技術的老朽化により保守が困難で、新技術との統合やセキュリティ対応が課題となります。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "量子コンピューティングの計算原理は？",
        ["二進法", "量子重ね合わせ", "十進法", "アナログ計算"],
        1,
        "量子コンピューティングは、量子力学の重ね合わせや量子もつれなどの性質を利用して、並列計算を実現します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・ウェルビーイングの概念は？",
        ["技術依存促進", "健康的なデジタル技術利用", "デジタル技術排除", "無制限利用"],
        1,
        "デジタル・ウェルビーイングは、デジタル技術を健康的でバランスの取れた方法で利用し、個人の幸福を向上させる概念です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "エシカルハッキング（ホワイトハット）の目的は？",
        ["システム破壊", "セキュリティ脆弱性の発見", "データ盗用", "サービス妨害"],
        1,
        "エシカルハッキングは、システム所有者の許可を得て脆弱性を発見し、セキュリティ向上に貢献する活動です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・ディスラプション（デジタル破壊）の特徴は？",
        ["既存産業の強化", "既存ビジネスモデルの根本的変革", "段階的改善", "コスト削減のみ"],
        1,
        "デジタル・ディスラプションは、デジタル技術により既存の産業構造やビジネスモデルが根本的に変革される現象です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報リテラシー教育で重要な「批判的評価スキル」とは？",
        ["情報の暗記", "情報の信頼性と妥当性の判断", "情報の高速処理", "情報の大量収集"],
        1,
        "批判的評価スキルは、情報の出典、信頼性、偏見、目的を分析し、情報の価値と妥当性を適切に判断する能力です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタル・シティズンシップ教育の目標は？",
        ["技術操作のみ", "責任あるデジタル社会参加", "プログラミング技術", "ハードウェア知識"],
        1,
        "デジタル・シティズンシップ教育は、デジタル社会において責任を持って安全かつ効果的に参加できる市民を育成することを目標とします。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "持続可能な情報社会実現における「グリーンIT」の取り組みは？",
        ["エネルギー消費増加", "省エネルギーと環境負荷削減", "処理速度優先", "コスト無視"],
        1,
        "グリーンITは、IT機器の省エネルギー化、データセンターの効率化、電子廃棄物の削減など、環境負荷軽減を目指します。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報システムの「技術的負債」を管理する方法は？",
        ["負債の蓄積", "継続的なリファクタリング", "対応の先送り", "無視する"],
        1,
        "技術的負債の管理には、継続的なリファクタリング、コード品質の監視、定期的な技術更新、負債の可視化が重要です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),

    // 情報社会と倫理 - 最終追加分（10問）
    new Question(
        "デジタルトランスフォーメーション（DX）における倫理的課題は何ですか？",
        ["技術的困難", "労働の代替と雇用問題", "コスト増加", "時間不足"],
        1,
        "DXは自動化により労働の代替が進み、雇用への影響や社会格差の拡大という倫理的課題があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "AIによる自動意思決定システムで重要な「説明可能性」とは何ですか？",
        ["処理速度の向上", "判断根拠の透明化", "コストの削減", "精度の向上"],
        1,
        "AI の説明可能性は、システムがどのような根拠で判断を行ったかを人間が理解できるようにすることです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デジタルプラットフォームの「ネットワーク効果」が引き起こす問題は何ですか？",
        ["技術革新の促進", "市場の独占化", "利用料金の低下", "セキュリティの向上"],
        1,
        "ネットワーク効果により利用者が増えると価値が高まり、結果的に市場の独占化につながる可能性があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報社会における「フィルターバブル」現象とは何ですか？",
        ["情報の完全削除", "個人の情報環境の閉鎖化", "情報の高速化", "情報の暗号化"],
        1,
        "フィルターバブルは、アルゴリズムにより個人の好みに合った情報のみが提示され、多様な視点に触れる機会が減る現象です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "GDPR（EU一般データ保護規則）における「忘れられる権利」の意味は何ですか？",
        ["記憶力の向上", "個人データの削除要求権", "パスワードの忘却", "情報の永続保存"],
        1,
        "忘れられる権利は、個人が自分に関するデータの削除を事業者に要求できる権利です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "企業の「CSR（企業の社会的責任）」における情報技術の役割は何ですか？",
        ["売上の最大化", "社会課題解決への貢献", "競合他社の排除", "技術の独占"],
        1,
        "CSRにおいて情報技術は、環境問題解決、社会インフラ整備、教育格差解消など社会課題の解決に活用されます。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "IoT機器のセキュリティにおける「デフォルトパスワード」の問題点は何ですか？",
        ["処理速度の低下", "不正アクセスのリスク", "消費電力の増加", "機能の制限"],
        1,
        "デフォルトパスワードは製品共通で推測されやすく、変更しないと不正アクセスの標的になりやすいです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Basic
    ),
    new Question(
        "デジタル広告における「行動ターゲティング」の倫理的問題は何ですか？",
        ["広告効果の向上", "プライバシーの侵害", "コストの削減", "技術の進歩"],
        1,
        "行動ターゲティングは個人の行動履歴を詳細に分析するため、プライバシー侵害や監視社会化の懸念があります。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報格差是正のための「デジタルインクルージョン」とは何ですか？",
        ["技術の独占", "情報アクセスの平等化", "デジタル機器の販売", "ネットワークの高速化"],
        1,
        "デジタルインクルージョンは、年齢、障害、経済状況に関わらず、すべての人がデジタル技術を利用できる環境づくりです。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "SNSプラットフォームの「コンテンツモデレーション」における課題は何ですか？",
        ["技術的な困難さ", "表現の自由との両立", "処理速度の向上", "利用者数の増加"],
        1,
        "コンテンツモデレーションは、有害コンテンツの除去と表現の自由の保障のバランスを取ることが困難です。",
        QuestionCategory.InformationSocietyEthics,
        DifficultyLevel.Advanced
    ),

    // データ活用の基礎 - 最終追加分（10問）
    new Question(
        "機械学習における「過学習（オーバーフィッティング）」とは何ですか？",
        ["学習時間の短縮", "訓練データに特化しすぎること", "学習精度の向上", "データ不足"],
        1,
        "過学習は、モデルが訓練データに特化しすぎて、新しいデータに対する汎化性能が低下する現象です。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データマイニングにおける「アソシエーション分析」の目的は何ですか？",
        ["データの削除", "項目間の関連性発見", "データの暗号化", "処理速度向上"],
        1,
        "アソシエーション分析は、商品購買データなどから「Aを買った人はBも買う傾向がある」といった関連性を発見します。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "統計における「相関と因果の違い」を正しく表すものは何ですか？",
        ["相関があれば因果関係も存在する", "因果関係があれば相関も必ず存在する", "相関は因果関係を意味しない", "相関と因果は同じ意味"],
        2,
        "相関関係は2つの変数間の関連性を示しますが、必ずしも一方が他方の原因であることを意味しません。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ビッグデータの特徴を表す「3V」に含まれないものはどれですか？",
        ["Volume（量）", "Velocity（速度）", "Variety（多様性）", "Visibility（可視性）"],
        3,
        "ビッグデータの3Vは、Volume（データ量）、Velocity（処理速度）、Variety（データの多様性）です。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Basic
    ),
    new Question(
        "クロス集計表における「カイ二乗検定」の目的は何ですか？",
        ["平均値の計算", "独立性の検定", "分散の計算", "相関の計算"],
        1,
        "カイ二乗検定は、2つのカテゴリ変数間に関連性（依存関係）があるかどうかを統計的に検定します。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Advanced
    ),
    new Question(
        "データベースの「正規化」を行う主な目的は何ですか？",
        ["処理速度の向上", "データの冗長性排除", "セキュリティの強化", "容量の削減"],
        1,
        "正規化は、データの重複や不整合を防ぎ、データベースの整合性を保つためにテーブル構造を最適化することです。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Intermediate
    ),  
    new Question(
        "時系列データ分析における「季節性」とは何ですか？",
        ["データの欠損", "周期的な変動パターン", "データの異常値", "ランダムな変動"],
        1,
        "季節性は、時系列データに見られる一定期間ごとに繰り返される規則的な変動パターンです。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "データ可視化において「ヒートマップ」が適している用途は何ですか？",
        ["時系列の変化", "相関関係の表現", "カテゴリの比較", "地理的分布"],
        1,
        "ヒートマップは、データの値を色の濃淡で表現し、相関行列や密度分布の可視化に適しています。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Basic
    ),
    new Question(
        "統計的仮説検定における「第一種の過誤（α過誤）」とは何ですか？",
        ["正しい仮説を棄却すること", "間違った仮説を採択すること", "データの欠損", "計算の誤り"],
        0,
        "第一種の過誤は、実際には正しい帰無仮説を誤って棄却してしまう誤りです。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Advanced
    ),
    new Question(
        "ETL（Extract, Transform, Load）プロセスの「Transform」段階で行われることは何ですか？",
        ["データの抽出", "データの変換・加工", "データの読み込み", "データの削除"],
        1,
        "Transform段階では、抽出したデータを目的に応じて変換・加工・クレンジングを行います。",
        QuestionCategory.DataUtilization,
        DifficultyLevel.Intermediate
    ),

    // 問題解決・情報活用 - 最終追加分（8問）
    new Question(
        "システム思考における「レバレッジポイント」とは何ですか？",
        ["最大の投資地点", "最小の介入で最大の効果を得る地点", "最も複雑な部分", "最初の処理地点"],
        1,
        "レバレッジポイントは、システムにおいて小さな変化が大きな変化を生み出す重要な介入点です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報リテラシーにおける「メタ認知」の重要性は何ですか？",
        ["記憶力の向上", "自分の思考過程の監視", "処理速度の向上", "情報量の増加"],
        1,
        "メタ認知は自分の思考や学習プロセスを客観視し、より効果的な問題解決や学習につながります。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "デザイン思考における「プロトタイピング」の目的は何ですか？",
        ["最終製品の完成", "アイデアの早期検証", "コストの削減", "時間の短縮"],
        1,
        "プロトタイピングは、アイデアを素早く形にして早期にフィードバックを得て、改善を繰り返すために行います。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "情報の信頼性評価における「ソース・クリティシズム」とは何ですか？",
        ["情報の暗記", "情報源の批判的検討", "情報の要約", "情報の分類"],
        1,
        "ソース・クリティシズムは、情報の発信者、発信時期、発信目的などを批判的に検討し、信頼性を評価することです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "問題解決における「創発」現象の特徴は何ですか？",
        ["要素の単純な総和", "予測可能な結果", "構成要素の相互作用から生まれる新たな性質", "線形的な発展"],
        2,
        "創発は、システムの構成要素の相互作用により、個々の要素からは予測できない新たな性質や機能が現れることです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "知識マネジメントにおける「実践共同体（CoP: Communities of Practice）」の役割は何ですか？",
        ["階層的管理", "知識の共有と創造", "個人作業の促進", "競争の促進"],
        1,
        "実践共同体は、共通の関心や専門性を持つ人々が知識を共有し、新たな知識を協働で創造する場です。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "情報アーキテクチャにおける「情報スケント」とは何ですか？",
        ["情報の削除", "情報の探索行動", "情報の暗号化", "情報の複製"],
        1,
        "情報スケントは、人が求める情報を見つけるためにたどる手がかりや痕跡のことです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),
    new Question(
        "複雑問題解決における「適応的管理」アプローチの特徴は何ですか？",
        ["固定的な計画", "継続的な学習と調整", "一度きりの実行", "完全な予測"],
        1,
        "適応的管理は、不確実性の高い複雑な問題に対して、継続的に学習し、状況に応じて戦略を調整するアプローチです。",
        QuestionCategory.ProblemSolvingInformationLiteracy,
        DifficultyLevel.Advanced
    ),

    // デジタル情報基礎 - 最終追加分（8問）
    new Question(
        "IPv6アドレスの表記法として正しいものはどれですか？",
        ["192.168.1.1", "2001:0db8:85a3::8a2e:0370:7334", "FF:FF:FF:FF:FF:FF", "255.255.255.0"],
        1,
        "IPv6は128ビットアドレスを16進数で表記し、コロンで区切られた8つのグループで構成されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "デジタル画像の「ビット深度」が色数に与える影響は何ですか？",
        ["画像サイズに比例", "2のビット深度乗", "ビット深度に比例", "影響しない"],
        1,
        "ビット深度nビットの場合、表現可能な色数は2^n色になります。例えば8ビットなら256色です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "JSON（JavaScript Object Notation）の特徴として正しいものはどれですか？",
        ["バイナリ形式", "軽量なテキスト形式", "画像専用形式", "音声専用形式"],
        1,
        "JSONは軽量なテキストベースのデータ交換形式で、人間にとって読み書きしやすく、多くのプログラミング言語でサポートされています。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Basic
    ),
    new Question(
        "HTTP/2プロトコルの改善点として正しいものはどれですか？",
        ["セキュリティの削除", "多重化によるパフォーマンス向上", "テキスト形式への変更", "暗号化の廃止"],
        1,
        "HTTP/2は、複数のリクエスト・レスポンスを並行処理する多重化により、Webサイトの読み込み速度を向上させます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "CSS Grid Layoutの主な用途は何ですか？",
        ["動画再生", "2次元レイアウトの作成", "データベース接続", "音声処理"],
        1,
        "CSS Gridは、行と列を使った2次元的なレイアウトシステムで、複雑なWebページレイアウトを効率的に作成できます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "Progressive Web App（PWA）の特徴として正しくないものはどれですか？",
        ["オフライン動作", "プッシュ通知", "ネイティブアプリと同等の体験", "デスクトップ専用"],
        3,
        "PWAはWebとネイティブアプリの良さを組み合わせた技術で、モバイルでもデスクトップでも動作します。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "XML名前空間（XML Namespace）の目的は何ですか？",
        ["処理速度向上", "要素名の衝突回避", "ファイルサイズ削減", "セキュリティ強化"],
        1,
        "XML名前空間は、異なるXML語彙で同じ要素名が使われた場合の衝突を避けるために使用されます。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),
    new Question(
        "WebAssembly（WASM）の主な利点は何ですか？",
        ["JavaScriptの完全な代替", "ブラウザでのネイティブレベル性能", "HTML生成の簡素化", "CSS処理の高速化"],
        1,
        "WebAssemblyは、C/C++/Rustなどの言語で書かれたコードをブラウザでネイティブレベルの速度で実行できる技術です。",
        QuestionCategory.DigitalInformationBasics,
        DifficultyLevel.Advanced
    ),

    // ネットワークとセキュリティ 最終追加（10問）
    new Question(
        "ゼロトラストセキュリティモデルの基本原則は何ですか？",
        ["境界防御の強化", "すべてを検証する", "内部ネットワークの信頼", "パスワード認証のみ"],
        1,
        "ゼロトラストは「何も信用せず、すべてを検証する」という原則で、内部・外部を問わずすべてのアクセスを検証します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "SIEM（Security Information and Event Management）システムの主な機能は何ですか？",
        ["ウイルス除去", "セキュリティイベントの統合分析", "パスワード管理", "データバックアップ"],
        1,
        "SIEMは、様々なセキュリティ機器からのログやイベントを収集・統合し、脅威を検出・分析します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "DNS over HTTPS（DoH）の目的は何ですか？",
        ["DNS の高速化", "DNS クエリの暗号化", "DNS サーバーの冗長化", "DNS キャッシュの最適化"],
        1,
        "DoHは、DNS クエリをHTTPS で暗号化し、DNS通信の盗聴や改竄を防ぐプライバシー保護技術です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "エンドポイント検知・対応（EDR）ソリューションの特徴は何ですか？",
        ["ネットワーク境界防御", "端末での脅威検知と対応", "メール配信管理", "Web コンテンツフィルタリング"],
        1,
        "EDRは、PC やサーバーなどの端末（エンドポイント）での不審な活動を監視・検知し、迅速な対応を支援します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "サイバーキルチェーンにおける「reconnaissance（偵察）」段階の活動は何ですか？",
        ["マルウェア実行", "標的の情報収集", "データ窃取", "バックドア設置"],
        1,
        "偵察段階では、攻撃者が標的組織の技術情報、従業員情報、システム構成などを事前調査します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "WAF（Web Application Firewall）が防御できない攻撃はどれですか？",
        ["SQLインジェクション", "クロスサイトスクリプティング", "DDoS攻撃", "内部不正アクセス"],
        3,
        "WAFはWebアプリケーションへの外部攻撃を防御しますが、正当な権限を持つ内部ユーザーによる不正アクセスは検知困難です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "ハニーポット技術の主な目的は何ですか？",
        ["システム性能向上", "攻撃者の行動分析", "データバックアップ", "ネットワーク高速化"],
        1,
        "ハニーポットは、攻撃者をおびき寄せて行動を観察・分析し、新たな攻撃手法や脅威情報を収集する目的で使用されます。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "量子暗号通信の安全性の根拠は何ですか？",
        ["計算の複雑さ", "物理法則（量子力学）", "大容量メモリ", "高速プロセッサ"],
        1,
        "量子暗号は、量子もつれや不確定性原理などの量子力学の物理法則により、理論的に解読不可能な通信を実現します。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Advanced
    ),
    new Question(
        "CSIRT（Computer Security Incident Response Team）の主な役割は何ですか？",
        ["システム開発", "セキュリティインシデント対応", "ハードウェア保守", "ソフトウェア販売"],
        1,
        "CSIRTは、セキュリティインシデント発生時の初動対応、被害拡大防止、復旧支援、再発防止策の策定を行います。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    ),
    new Question(
        "セキュリティバイデザイン（Security by Design）の考え方として正しいものはどれですか？",
        ["後からセキュリティを追加", "設計段階からセキュリティを組み込み", "セキュリティ機能の削除", "コストを最優先"],
        1,
        "セキュリティバイデザインは、システムやサービスの設計・開発の初期段階からセキュリティを組み込む考え方です。",
        QuestionCategory.NetworkSecurity,
        DifficultyLevel.Intermediate
    )
];

// QuizDataクラス - 元のC#版と同等の機能を提供
class QuizData {
    // 静的プロパティ - getter形式で実装
    static get QuestionCategory() {
        return QuestionCategory;
    }
    
    static get DifficultyLevel() {
        return DifficultyLevel;
    }

    // 全ての問題を取得
    static getAllQuestions() {
        return allQuestions;
    }

    // カテゴリ別問題を取得
    static getQuestionsByCategory(category) {
        if (category === QuestionCategory.All) {
            return allQuestions;
        }
        return allQuestions.filter(q => q.category === category);
    }

    // 難易度別問題を取得
    static getQuestionsByDifficulty(difficulty) {
        if (difficulty === DifficultyLevel.All) {
            return allQuestions;
        }
        return allQuestions.filter(q => q.difficulty === difficulty);
    }

    // カテゴリと難易度で問題を取得
    static getQuestionsByCategoryAndDifficulty(category, difficulty) {
        let filteredQuestions = allQuestions;
        
        if (category !== QuestionCategory.All) {
            filteredQuestions = filteredQuestions.filter(q => q.category === category);
        }
        
        if (difficulty !== DifficultyLevel.All) {
            filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
        }
        
        return filteredQuestions;
    }

    // ランダムに問題を取得
    static getRandomQuestions(count, category = QuestionCategory.All, difficulty = DifficultyLevel.All) {
        const availableQuestions = this.getQuestionsByCategoryAndDifficulty(category, difficulty);
        
        if (availableQuestions.length === 0) {
            return [];
        }
        
        // Fisher-Yates シャッフル
        const shuffled = [...availableQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    // カテゴリ統計を取得
    static getCategoryStatistics() {
        const stats = {};
        Object.values(QuestionCategory).forEach(category => {
            if (category !== QuestionCategory.All) {
                stats[category] = this.getQuestionsByCategory(category).length;
            }
        });
        return stats;
    }

    // 難易度統計を取得
    static getDifficultyStatistics() {
        const stats = {};
        Object.values(DifficultyLevel).forEach(difficulty => {
            if (difficulty !== DifficultyLevel.All) {
                stats[difficulty] = this.getQuestionsByDifficulty(difficulty).length;
            }
        });
        return stats;
    }

    // 総問題数を取得
    static getTotalQuestionCount() {
        return allQuestions.length;
    }

    // カテゴリ表示名を取得
    static getCategoryDisplayName(category) {
        return CategoryDisplayNames[category] || category;
    }

    // 難易度表示名を取得
    static getDifficultyDisplayName(difficulty) {
        return DifficultyDisplayNames[difficulty] || difficulty;
    }

    // カテゴリ別問題数を取得
    static getCategoryQuestionCount(category) {
        if (category === QuestionCategory.All) {
            return allQuestions.length;
        }
        return allQuestions.filter(q => q.category === category).length;
    }

    // 条件に合う問題を取得
    static getFilteredQuestions(selectedCategories, selectedDifficulty) {
        let filteredQuestions = allQuestions;

        // カテゴリでフィルタリング
        if (selectedCategories && selectedCategories.length > 0 && 
            !selectedCategories.includes(QuestionCategory.All)) {
            filteredQuestions = filteredQuestions.filter(q => 
                selectedCategories.includes(q.category)
            );
        }

        // 難易度でフィルタリング
        if (selectedDifficulty && selectedDifficulty !== DifficultyLevel.All) {
            filteredQuestions = filteredQuestions.filter(q => 
                q.difficulty === selectedDifficulty
            );
        }

        return filteredQuestions;
    }

    // 配列をシャッフル
    static shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// ブラウザ環境とNode.js環境両方で動作するようにエクスポート
if (typeof module !== 'undefined' && module.exports) {
    // Node.js環境
    module.exports = {
        QuestionCategory,
        DifficultyLevel,
        Question,
        QuizData,
        CategoryDisplayNames,
        DifficultyDisplayNames
    };
}

// ブラウザ環境では、グローバルスコープで利用可能になる
if (typeof window !== 'undefined') {
    window.QuestionCategory = QuestionCategory;
    window.DifficultyLevel = DifficultyLevel;
    window.Question = Question;
    window.QuizData = QuizData;
    window.CategoryDisplayNames = CategoryDisplayNames;
    window.DifficultyDisplayNames = DifficultyDisplayNames;
}

