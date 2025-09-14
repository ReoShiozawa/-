// ゲーミフィケーションシステム
class GamificationSystem {
    constructor() {
        this.achievements = this.loadAchievements();
        this.playerStats = this.loadPlayerStats();
        this.dailyStreak = this.loadDailyStreak();
        this.level = this.calculateLevel();
    }

    loadPlayerStats() {
        const defaultStats = {
            totalQuestions: 0,
            correctAnswers: 0,
            totalTime: 0,
            categoriesCompleted: new Set(),
            perfectScores: 0,
            streakRecord: 0,
            gamesPlayed: 0,
            lastPlayDate: null
        };
        
        const saved = localStorage.getItem('quizStats');
        return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
    }

    loadAchievements() {
        const achievements = {
            'first_quiz': { name: '初回挑戦者', description: '初めてクイズに挑戦！', icon: '🌟', unlocked: false },
            'perfect_score': { name: 'パーフェクト', description: '100%正解を達成！', icon: '💯', unlocked: false },
            'speed_demon': { name: 'スピードマスター', description: '平均3秒以内で回答！', icon: '⚡', unlocked: false },
            'marathon_runner': { name: 'マラソンランナー', description: '50問連続クリア！', icon: '🏃‍♂️', unlocked: false },
            'category_master': { name: 'カテゴリマスター', description: '全カテゴリを制覇！', icon: '👑', unlocked: false },
            'streak_master': { name: 'ストリークマスター', description: '7日連続プレイ！', icon: '🔥', unlocked: false },
            'knowledge_seeker': { name: '知識探求者', description: '1000問回答達成！', icon: '📚', unlocked: false },
            'early_bird': { name: '早起きの鳥', description: '朝6時前にプレイ！', icon: '🌅', unlocked: false }
        };
        
        const saved = localStorage.getItem('achievements');
        if (saved) {
            const savedData = JSON.parse(saved);
            Object.keys(achievements).forEach(key => {
                if (savedData[key]) {
                    achievements[key] = { ...achievements[key], ...savedData[key] };
                }
            });
        }
        
        return achievements;
    }

    loadDailyStreak() {
        const saved = localStorage.getItem('dailyStreak');
        const defaultStreak = { count: 0, lastDate: null };
        
        if (!saved) return defaultStreak;
        
        const streak = JSON.parse(saved);
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (streak.lastDate === today) {
            return streak; // 今日すでにプレイ済み
        } else if (streak.lastDate === yesterday) {
            return streak; // 昨日プレイ、ストリーク継続可能
        } else {
            return { count: 0, lastDate: null }; // ストリーク途切れ
        }
    }

    calculateLevel() {
        const totalXP = this.playerStats.correctAnswers * 10 + this.playerStats.perfectScores * 50;
        return Math.floor(totalXP / 100) + 1;
    }

    updateStats(gameResult) {
        const stats = this.playerStats;
        const today = new Date().toDateString();
        
        stats.totalQuestions += gameResult.totalQuestions;
        stats.correctAnswers += gameResult.correctAnswers;
        stats.totalTime += gameResult.totalTime || 0;
        stats.gamesPlayed += 1;
        
        if (gameResult.percentage === 100) {
            stats.perfectScores += 1;
        }
        
        // デイリーストリーク更新
        if (this.dailyStreak.lastDate !== today) {
            if (this.dailyStreak.lastDate === new Date(Date.now() - 86400000).toDateString()) {
                this.dailyStreak.count += 1;
            } else {
                this.dailyStreak.count = 1;
            }
            this.dailyStreak.lastDate = today;
        }
        
        stats.lastPlayDate = today;
        
        this.saveData();
        this.checkAchievements(gameResult);
    }

    // 正解時の処理
    answerCorrect() {
        const xpGained = 5; // 正解ごとに5XP
        this.playerStats.xp += xpGained;
        this.playerStats.correctAnswers++;
        
        // レベルアップチェック
        this.checkLevelUp();
        
        this.saveData();
        return xpGained;
    }

    // レベルアップの確認
    checkLevelUp() {
        const currentLevel = this.playerStats.level;
        const newLevel = Math.floor(this.playerStats.xp / this.playerStats.xpToNextLevel) + 1;
        
        if (newLevel > currentLevel) {
            this.playerStats.level = newLevel;
            this.playerStats.xpToNextLevel = newLevel * 100; // レベルごとに必要XPを増加
            
            // レベルアップ通知
            setTimeout(() => {
                ToastNotification.show(`🎉 レベルアップ！ Lv.${newLevel} になりました！`, 'success', 3000);
            }, 1000);
        }
    }

    checkAchievements(gameResult) {
        const newAchievements = [];
        
        // 初回挑戦
        if (!this.achievements.first_quiz.unlocked && this.playerStats.gamesPlayed === 1) {
            this.achievements.first_quiz.unlocked = true;
            newAchievements.push(this.achievements.first_quiz);
        }
        
        // パーフェクトスコア
        if (!this.achievements.perfect_score.unlocked && gameResult.percentage === 100) {
            this.achievements.perfect_score.unlocked = true;
            newAchievements.push(this.achievements.perfect_score);
        }
        
        // ストリークマスター
        if (!this.achievements.streak_master.unlocked && this.dailyStreak.count >= 7) {
            this.achievements.streak_master.unlocked = true;
            newAchievements.push(this.achievements.streak_master);
        }
        
        // 知識探求者
        if (!this.achievements.knowledge_seeker.unlocked && this.playerStats.totalQuestions >= 1000) {
            this.achievements.knowledge_seeker.unlocked = true;
            newAchievements.push(this.achievements.knowledge_seeker);
        }
        
        // 早起きの鳥
        const hour = new Date().getHours();
        if (!this.achievements.early_bird.unlocked && hour < 6) {
            this.achievements.early_bird.unlocked = true;
            newAchievements.push(this.achievements.early_bird);
        }
        
        // 新しい実績を表示
        newAchievements.forEach(achievement => {
            this.showAchievementNotification(achievement);
        });
        
        this.saveData();
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-content">
                <div class="achievement-title">実績解除！</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // アニメーション
        setTimeout(() => notification.classList.add('show'), 100);
        
        // 5秒後に削除
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 5000);
        
        // 効果音とバイブレーション
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
    }

    saveData() {
        localStorage.setItem('quizStats', JSON.stringify(this.playerStats));
        localStorage.setItem('achievements', JSON.stringify(this.achievements));
        localStorage.setItem('dailyStreak', JSON.stringify(this.dailyStreak));
    }

    getProgressToNextLevel() {
        const currentLevelXP = (this.level - 1) * 100;
        const totalXP = this.playerStats.correctAnswers * 10 + this.playerStats.perfectScores * 50;
        const progressXP = totalXP - currentLevelXP;
        return Math.min(progressXP / 100, 1);
    }

    getPlayerStats() {
        return this.playerStats;
    }

    completeQuiz(correctAnswers, totalQuestions) {
        // XP加算や実績処理が不要なら何もしない
        return 0;
    }
}

// パーティクルエフェクトクラス
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.container = document.getElementById('particles');
        this.createParticles();
        this.animate();
    }

    createParticles() {
        const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // ランダムな初期位置
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // ランダムなアニメーション遅延
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            
            // ランダムなサイズ
            const size = Math.random() * 3 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // ランダムな透明度
            particle.style.opacity = Math.random() * 0.6 + 0.2;
            
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }

    animate() {
        this.particles.forEach(particle => {
            const animateParticle = () => {
                const rect = particle.getBoundingClientRect();
                if (rect.top > window.innerHeight) {
                    particle.style.top = '-10px';
                    particle.style.left = Math.random() * 100 + '%';
                }
                requestAnimationFrame(animateParticle);
            };
            animateParticle();
        });
    }
}

// ローディング画面クラス
class LoadingScreen {
    constructor() {
        this.element = document.getElementById('loading-screen');
    }
    init() {
        // 2秒後にローディング画面を非表示
        setTimeout(() => {
            this.hide();
        }, 2000);
    }
    hide() {
        this.element.classList.add('hidden');
        // アニメーション完了後に要素を削除
        setTimeout(() => {
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }, 600);
    }
}

// トースト通知クラス
class ToastNotification {
    static show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // アニメーションで表示
        setTimeout(() => toast.classList.add('show'), 100);
        
        // 指定時間後に非表示
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 400);
        }, duration);
    }
}

// メインアプリケーションクラス
class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.skippedAnswers = 0;
        this.selectedCategories = [QuizData.QuestionCategory.All];
        this.selectedDifficulty = QuizData.DifficultyLevel.All;
        this.questionCount = 10;
        this.isAnswered = false;
        this.userAnswers = [];
        this.startTime = null;
        this.questionStartTime = null;
        this.questionTimes = [];
        
        // ゲーミフィケーション機能を追加
        this.gamification = new GamificationSystem();
        
        this.initializeApp();
    }

    initializeApp() {
        // パーティクルシステムとローディング画面を初期化
        this.particleSystem = new ParticleSystem();
        this.loadingScreen = new LoadingScreen();
        this.loadingScreen.init();
        
        this.setupCategories();
        this.setupEventListeners();
        this.showScreen('setup-screen');
        
        // プレイヤーステータスを更新
        this.updatePlayerStats();
        
        // ローディング完了後にトースト表示
        setTimeout(() => {
            ToastNotification.show('クイズアプリへようこそ！🎉', 'success');
        }, 2500);
    }

    // カテゴリのチェックボックスを設定
    setupCategories() {
        const categoryGrid = document.getElementById('category-grid');
        categoryGrid.innerHTML = '';

        Object.values(QuizData.QuestionCategory).forEach(category => {
            const questionCount = QuizData.getCategoryQuestionCount(category);
            const displayName = QuizData.getCategoryDisplayName(category);
            
            const categoryOption = document.createElement('label');
            categoryOption.className = 'category-option';
            categoryOption.setAttribute('tabindex', '0');
            
            const checkboxId = `category-${category}`;
            const isChecked = category === QuizData.QuestionCategory.All;
            
            categoryOption.innerHTML = `
                <input type="checkbox" id="${checkboxId}" value="${category}" 
                       ${isChecked ? 'checked' : ''}
                       aria-describedby="${checkboxId}-desc">
                <div class="category-info">
                    <div class="category-name">${displayName}</div>
                    <div class="category-count" id="${checkboxId}-desc">${questionCount}問利用可能</div>
                </div>
            `;
            
            const checkbox = categoryOption.querySelector('input');
            
            // チェックボックスの変更を監視
            checkbox.addEventListener('change', () => this.handleCategoryChange(category, checkbox.checked));
            
            // ラベル全体のクリックでもチェックボックスを切り替え
            categoryOption.addEventListener('click', (e) => {
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                    this.handleCategoryChange(category, checkbox.checked);
                }
            });
            
            // キーボードサポート
            categoryOption.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    checkbox.checked = !checkbox.checked;
                    this.handleCategoryChange(category, checkbox.checked);
                }
            });
            
            categoryGrid.appendChild(categoryOption);
        });
    }

    // イベントリスナーを設定
    setupEventListeners() {
        // 設定画面
        document.getElementById('start-quiz').addEventListener('click', () => this.startQuiz());
        
        // 難易度選択
        document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.selectedDifficulty = this.mapDifficultyValue(e.target.value);
            });
        });

        // 問題数選択
        document.getElementById('question-count').addEventListener('change', (e) => {
            this.questionCount = e.target.value === 'all' ? 'all' : parseInt(e.target.value);
        });

        // クイズ画面
        document.getElementById('next-question').addEventListener('click', () => this.nextQuestion());
        document.getElementById('skip-question').addEventListener('click', () => this.skipQuestion());

        // 結果画面
        document.getElementById('restart-quiz').addEventListener('click', () => this.restartQuiz());
        document.getElementById('new-settings').addEventListener('click', () => this.newSettings());
    }

    // 難易度の値をマッピング
    mapDifficultyValue(value) {
        const mapping = {
            'basic': 'Basic',
            'intermediate': 'Intermediate',
            'advanced': 'Advanced',
            'all': 'All'
        };
        return mapping[value] || 'All';
    }

    // カテゴリ変更ハンドラ
    handleCategoryChange(category, isChecked) {
        if (category === QuizData.QuestionCategory.All) {
            if (isChecked) {
                this.selectedCategories = [QuizData.QuestionCategory.All];
                // 他のすべてのチェックボックスを無効化
                document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                    if (cb.value !== QuizData.QuestionCategory.All) {
                        cb.checked = false;
                    }
                });
            } else {
                this.selectedCategories = [];
            }
        } else {
            // 「すべて」のチェックを外す
            document.getElementById(`category-${QuizData.QuestionCategory.All}`).checked = false;
            
            if (isChecked) {
                if (!this.selectedCategories.includes(category)) {
                    this.selectedCategories = this.selectedCategories.filter(c => c !== QuizData.QuestionCategory.All);
                    this.selectedCategories.push(category);
                }
            } else {
                this.selectedCategories = this.selectedCategories.filter(c => c !== category);
            }

            // カテゴリが選択されていない場合は「すべて」にチェック
            if (this.selectedCategories.length === 0) {
                this.selectedCategories = [QuizData.QuestionCategory.All];
                document.getElementById(`category-${QuizData.QuestionCategory.All}`).checked = true;
            }
        }

        // 見た目を更新
        this.updateCategoryAppearance();
    }

    // カテゴリの見た目を更新
    updateCategoryAppearance() {
        document.querySelectorAll('.category-option').forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                option.classList.add('selected');
                option.setAttribute('aria-selected', 'true');
            } else {
                option.classList.remove('selected');
                option.setAttribute('aria-selected', 'false');
            }
        });
    }

    // クイズ開始
    startQuiz() {
        // ローディング状態を表示
        const startButton = document.getElementById('start-quiz');
        const originalText = startButton.textContent;
        startButton.textContent = '問題を読み込み中...';
        startButton.disabled = true;

        // 難易度を最新の選択値で取得
        const difficultyRadio = document.querySelector('input[name="difficulty"]:checked');
        if (difficultyRadio) {
            this.selectedDifficulty = this.mapDifficultyValue(difficultyRadio.value);
        }

        // 短い遅延でローディング感を演出
        setTimeout(() => {
            try {
                // 選択された条件で問題を取得
                const filteredQuestions = QuizData.getFilteredQuestions(this.selectedCategories, this.selectedDifficulty);
                
                if (filteredQuestions.length === 0) {
                    alert('選択された条件に合う問題がありません。条件を変更してください。');
                    startButton.textContent = originalText;
                    startButton.disabled = false;
                    return;
                }

                // 問題をシャッフル
                this.questions = QuizData.shuffleArray(filteredQuestions);
                
                // 問題数を制限
                if (this.questionCount !== 'all') {
                    this.questions = this.questions.slice(0, this.questionCount);
                }

                // 状態を初期化
                this.currentQuestionIndex = 0;
                this.correctAnswers = 0;
                this.skippedAnswers = 0;
                this.userAnswers = [];

                this.showScreen('quiz-screen');
                this.displayQuestion();
                
                // ボタンを元に戻す
                startButton.textContent = originalText;
                startButton.disabled = false;
            } catch (error) {
                console.error('クイズ開始時にエラーが発生しました:', error);
                alert('クイズの開始中にエラーが発生しました。ページを再読み込みして再試行してください。');
                startButton.textContent = originalText;
                startButton.disabled = false;
            }
        }, 300);
    }

    // 問題を表示
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.isAnswered = false;

        // 問題情報を更新
        document.getElementById('question-counter').textContent = 
            `問題 ${this.currentQuestionIndex + 1} / ${this.questions.length}`;
        document.getElementById('score').textContent = 
            `正解: ${this.correctAnswers}`;
        document.getElementById('question-category').textContent = 
            QuizData.getCategoryDisplayName(question.category);
        document.getElementById('question-difficulty').textContent = 
            QuizData.getDifficultyDisplayName(question.difficulty);
        document.getElementById('question-text').textContent = question.text;

        // プログレスバーを更新
        const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;

        // 選択肢を表示
        this.displayOptions(question);

        // コントロールボタンを初期化
        document.getElementById('next-question').disabled = true;
        document.getElementById('explanation').classList.add('hidden');

        // 問題カードにフェードイン効果
        const questionCard = document.querySelector('.question-card');
        questionCard.style.opacity = '0';
        questionCard.style.transform = 'translateY(10px)';
        setTimeout(() => {
            questionCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            questionCard.style.opacity = '1';
            questionCard.style.transform = 'translateY(0)';
        }, 50);
    }

    // 選択肢を表示
    displayOptions(question) {
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('label');
            optionElement.className = 'option';
            optionElement.setAttribute('tabindex', '0');
            optionElement.setAttribute('role', 'radio');
            optionElement.setAttribute('aria-checked', 'false');
            
            const optionLetter = String.fromCharCode(65 + index);
            optionElement.innerHTML = `
                <div class="option-letter" aria-hidden="true">${optionLetter}</div>
                <span class="option-text">${option}</span>
            `;
            
            // クリックとキーボードでの選択に対応
            optionElement.addEventListener('click', () => this.selectOption(index));
            optionElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectOption(index);
                }
            });
            
            optionsContainer.appendChild(optionElement);
        });

        // 最初の選択肢にフォーカスを設定
        if (optionsContainer.firstChild) {
            optionsContainer.firstChild.focus();
        }
    }

    // 選択肢を選択（エンハンスドバージョン）
    selectOption(selectedIndex) {
        if (this.isAnswered) return;

        const question = this.questions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        // ハプティックフィードバック（モバイル対応）
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // 選択効果音（サイレント実装）
        this.playSelectSound();
        
        // リップル効果を追加
        this.createRippleEffect(options[selectedIndex]);
        
        // すべての選択肢の選択状態をリセット
        options.forEach((option, index) => {
            option.classList.remove('selected');
            option.setAttribute('aria-checked', 'false');
        });
        
        // 選択された選択肢をマーク
        options[selectedIndex].classList.add('selected');
        options[selectedIndex].setAttribute('aria-checked', 'true');
        
        // 正解/不正解の判定と表示
        const isCorrect = selectedIndex === question.correctAnswer;
        
        setTimeout(() => {
            this.isAnswered = true;
            
            // 各選択肢に正解/不正解のクラスを追加
            options.forEach((option, index) => {
                if (index === question.correctAnswer) {
                    option.classList.add('correct');
                    option.setAttribute('aria-label', `正解: ${option.querySelector('.option-text').textContent}`);
                } else if (index === selectedIndex && !isCorrect) {
                    option.classList.add('incorrect');
                    option.setAttribute('aria-label', `不正解: ${option.querySelector('.option-text').textContent}`);
                }
            });

            // 結果をスコアに反映
            if (isCorrect) {
                this.correctAnswers++;
                // 正解時のフィードバック
                this.showFeedback('正解！', 'success');
                
                // 正解時にXP獲得
                const xpGained = this.gamification.answerCorrect();
                if (xpGained > 0) {
                    setTimeout(() => {
                        ToastNotification.show(`+${xpGained} XP`, 'success', 1000);
                    }, 500);
                }
                
                // プレイヤーステータスを更新
                this.updatePlayerStats();
            } else {
                // 不正解時のフィードバック
                this.showFeedback('不正解...', 'error');
            }

            // 回答を記録
            this.userAnswers.push({
                questionIndex: this.currentQuestionIndex,
                selectedAnswer: selectedIndex,
                correctAnswer: question.correctAnswer,
                isCorrect: isCorrect
            });

            // スコア表示を更新
            document.getElementById('score').textContent = `正解: ${this.correctAnswers}`;

            // 解説を表示
            if (question.explanation) {
                document.getElementById('explanation-text').textContent = question.explanation;
                document.getElementById('explanation').classList.remove('hidden');
            }

            // 次の問題ボタンを有効化
            document.getElementById('next-question').disabled = false;
            document.getElementById('next-question').focus();
        }, 300);
    }

    // フィードバック表示
    showFeedback(message, type) {
        // 既存のフィードバックを削除
        const existingFeedback = document.querySelector('.feedback-message');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // 新しいフィードバック要素を作成
        const feedback = document.createElement('div');
        feedback.className = `feedback-message feedback-${type}`;
        feedback.textContent = message;
        feedback.setAttribute('role', 'status');
        feedback.setAttribute('aria-live', 'polite');

        // クイズヘッダーに追加
        const quizHeader = document.querySelector('.quiz-header');
        quizHeader.appendChild(feedback);

        // 3秒後に自動削除
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.remove();
            }
        }, 3000);
    }

    // 回答を処理
    processAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correctAnswer;
        
        this.isAnswered = true;
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: selectedIndex,
            isCorrect: isCorrect,
            isSkipped: false
        });

        if (isCorrect) {
            this.correctAnswers++;
        }

        // 選択肢に正解/不正解の色を付ける
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            if (index === question.correctAnswer) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });

        // 解説を表示
        if (question.explanation) {
            document.getElementById('explanation-text').textContent = question.explanation;
            document.getElementById('explanation').classList.remove('hidden');
        }

        // 次の問題ボタンを有効化
        document.getElementById('next-question').disabled = false;
    }

    // 問題をスキップ
    skipQuestion() {
        if (this.isAnswered) {
            this.nextQuestion();
            return;
        }

        this.isAnswered = true;
        this.skippedAnswers++;
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: -1,
            isCorrect: false,
            isSkipped: true
        });

        const question = this.questions[this.currentQuestionIndex];
        
        // 正解を表示
        const options = document.querySelectorAll('.option');
        options[question.correctAnswer].classList.add('correct');

        // 解説を表示
        if (question.explanation) {
            document.getElementById('explanation-text').textContent = question.explanation;
            document.getElementById('explanation').classList.remove('hidden');
        }

        // 次の問題ボタンを有効化
        document.getElementById('next-question').disabled = false;
    }

    // 次の問題へ
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }

    // 結果を表示
    showResults() {
        const totalQuestions = this.questions.length;
        const incorrectAnswers = totalQuestions - this.correctAnswers - this.skippedAnswers;
        const percentage = Math.round((this.correctAnswers / totalQuestions) * 100);

        // ゲーミフィケーション：クイズ完了を記録
        const earnedXP = this.gamification.completeQuiz(this.correctAnswers, totalQuestions);
        
        // プレイヤーステータスを更新
        this.updatePlayerStats();

        this.showScreen('result-screen');

        // 高スコア時にお祝いエフェクト
        if (percentage >= 80) {
            setTimeout(() => this.celebrateSuccess(), 1000);
            // 高得点でボーナスXP
            if (percentage >= 90) {
                setTimeout(() => {
                    ToastNotification.show(`完璧！ボーナス経験値 +${Math.floor(earnedXP * 0.5)} 🌟`, 'success', 3000);
                }, 1500);
            }
        } else if (percentage >= 60) {
            setTimeout(() => ToastNotification.show('よくできました！👏', 'success'), 1000);
        } else {
            setTimeout(() => ToastNotification.show('次回は頑張りましょう！💪', 'info'), 1000);
        }

        // 経験値獲得の通知
        if (earnedXP > 0) {
            setTimeout(() => {
                ToastNotification.show(`経験値 +${earnedXP} を獲得！`, 'success', 2000);
            }, 2000);
        }

        // アニメーション付きで結果を表示
        setTimeout(() => {
            // スコアサークルのアニメーション
            this.animateScoreCircle(this.correctAnswers, totalQuestions);
            
            // 結果データを更新
            document.getElementById('final-score').textContent = this.correctAnswers;
            document.getElementById('final-total').textContent = `/ ${totalQuestions}`;
            document.getElementById('score-percentage').textContent = `${percentage}%`;
            document.getElementById('correct-count').textContent = this.correctAnswers;
            document.getElementById('incorrect-count').textContent = incorrectAnswers;
            document.getElementById('skip-count').textContent = this.skippedAnswers;

            // 苦手分野集計
            const wrongCategories = {};
            this.userAnswers.forEach(ans => {
                if (!ans.isCorrect) {
                    const cat = this.questions[ans.questionIndex].category;
                    wrongCategories[cat] = (wrongCategories[cat] || 0) + 1;
                }
            });
            let weakestCategory = null;
            let maxWrong = 0;
            Object.entries(wrongCategories).forEach(([cat, count]) => {
                if (count > maxWrong) {
                    maxWrong = count;
                    weakestCategory = cat;
                }
            });
            let weakestCategoryName = weakestCategory ? (CategoryDisplayNames[weakestCategory] || weakestCategory) : '特になし';
            // 結果画面に表示
            const weakElem = document.getElementById('weakest-category');
            if (weakElem) {
                weakElem.textContent = `苦手分野: ${weakestCategoryName}`;
            }

            // パフォーマンスメッセージを設定
            this.setResultMessage(percentage);
        }, 300);
    }

    // スコアサークルのアニメーション
    animateScoreCircle(score, total) {
        const scoreElement = document.getElementById('final-score');
        const percentageElement = document.getElementById('score-percentage');
        const percentage = Math.round((score / total) * 100);
        
        let currentScore = 0;
        let currentPercentage = 0;
        
        const duration = 1000; // 1秒
        const frameRate = 60;
        const totalFrames = (duration / 1000) * frameRate;
        const scoreIncrement = score / totalFrames;
        const percentageIncrement = percentage / totalFrames;
        
        const animateScore = () => {
            currentScore += scoreIncrement;
            currentPercentage += percentageIncrement;
            
            if (currentScore <= score) {
                scoreElement.textContent = Math.floor(currentScore);
                percentageElement.textContent = `${Math.floor(currentPercentage)}%`;
                requestAnimationFrame(animateScore);
            } else {
                scoreElement.textContent = score;
                percentageElement.textContent = `${percentage}%`;
            }
        };
        
        requestAnimationFrame(animateScore);
    }

    // 結果メッセージを設定
    setResultMessage(percentage) {
        const messageElement = document.getElementById('result-message');
        let message = '';
        let className = '';

        if (percentage >= 90) {
            message = '🏆 素晴らしい！ICTの知識が非常に豊富ですね！';
            className = 'excellent';
        } else if (percentage >= 70) {
            message = '👍 よくできました！ICTの基礎はしっかり身についています。';
            className = 'good';
        } else if (percentage >= 50) {
            message = '📚 まずまずです。もう少し学習を続けましょう！';
            className = 'average';
        } else {
            message = '💪 基礎から復習してみましょう。継続が大切です！';
            className = 'poor';
        }

        messageElement.textContent = message;
        messageElement.className = `result-message ${className}`;
    }

    // クイズを再開始
    restartQuiz() {
        this.startQuiz();
    }

    // 新しい設定で開始
    newSettings() {
        this.showScreen('setup-screen');
    }

    // 画面を切り替え（スムーズなアニメーション付き）
    showScreen(screenId) {
        const currentScreen = document.querySelector('.screen.active');
        const targetScreen = document.getElementById(screenId);
        
        if (currentScreen && currentScreen !== targetScreen) {
            // 現在の画面をフェードアウト
            currentScreen.classList.add('fade-out');
            
            setTimeout(() => {
                // 現在の画面を非アクティブに
                currentScreen.classList.remove('active', 'fade-out');
                
                // 新しい画面をアクティブに
                targetScreen.classList.add('active', 'fade-in');
                
                // フェードインクラスを削除
                setTimeout(() => {
                    targetScreen.classList.remove('fade-in');
                }, 400);
            }, 300);
        } else {
            // 初回表示時
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            targetScreen.classList.add('active');
        }
        
        // 画面遷移音（オプション）
        this.playTransitionSound();
    }

    // 画面遷移音を再生（サイレント実装）
    playTransitionSound() {
        // 実際の音声ファイルがある場合の実装例
        // const audio = new Audio('assets/sounds/transition.mp3');
        // audio.volume = 0.3;
        // audio.play().catch(() => {}); // 自動再生ポリシーによるエラーを無視
    }

    // 選択音を再生
    playSelectSound() {
        // 実際の音声ファイルがある場合の実装例
        // const audio = new Audio('assets/sounds/select.mp3');
        // audio.volume = 0.2;
        // audio.play().catch(() => {});
    }

    // リップル効果を作成
    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(79, 70, 229, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1000';

        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }

    // 成功時のお祝いエフェクト
    celebrateSuccess() {
        // 複数のお祝いパーティクルを作成
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createCelebrationParticle();
            }, i * 50);
        }
        
        ToastNotification.show('素晴らしい！🎉', 'success', 2000);
    }

    // お祝いパーティクルを作成
    createCelebrationParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = '#10b981';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '10000';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        particle.style.animation = `
            celebrationFloat ${Math.random() * 2 + 3}s ease-out forwards
        `;

        document.body.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 5000);
    }

    // プレイヤーステータスを更新
    updatePlayerStats() {
        const playerStats = this.gamification.getPlayerStats();
        
        // レベル・ストリーク関連の表示は削除済み
        // 総プレイ回数のみ更新
        const totalPlayed = document.getElementById('total-played');
        if (totalPlayed) {
            totalPlayed.textContent = playerStats.gamesPlayed;
        }
    }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

// カテゴリ選択時の見た目更新
document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.id.startsWith('category-')) {
        const categoryOption = e.target.closest('.category-option');
        if (e.target.checked) {
            categoryOption.classList.add('selected');
        } else {
            categoryOption.classList.remove('selected');
        }
    }
});

// 難易度選択時の見た目更新
document.addEventListener('change', (e) => {
    if (e.target.type === 'radio' && e.target.name === 'difficulty') {
        document.querySelectorAll('.radio-option').forEach(option => {
            if (option.querySelector('input[type="radio"]').checked) {
                option.style.borderColor = '#667eea';
                option.style.backgroundColor = '#f0f4ff';
            } else {
                option.style.borderColor = '#e2e8f0';
                option.style.backgroundColor = '#f8fafc';
            }
        });
    }
});
