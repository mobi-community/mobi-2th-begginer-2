### story book

프로젝트 진행 기간 : 20231213 ~ 20231220

---

[Pair-4(Amy, kimi) checkList!] <br/>
https://lyrical-brain-e0f.notion.site/mobi-beginner-week-2-bb8596254a084efdb57619970ef39088

### 과제1 디자인 시스템을 활용한 공용 컴포넌트 만들기 --> ✅

본문 참조, 기존에 있던 것을 가져다가 쓰는 것이 아닌 스스로 디자인 토큰을 정의하고 반드시 디자인 토큰을 props로 전달 받아야합니다. 디자인 토큰만 전달했을 때 컴포넌트가 생산되도록..!!!

### 과제2 UI 인벤토리 만들기 --> 진행중

생성했던 공용 컴포넌트를 스토리북을 활용하여 UI 인벤토리화 해보세요 ✅ <br/>
페이지네이션 컴포넌트를 스토리북을 활용하여 UI 인벤토리화 해보세요

### 과제3 다양한 스타일 라이브러리를 활용하여 디자인 시스템 적용하기

본문참조, 다양한 스타일 라이브러리를 활용하여 공용 컴포넌트 만들기

### 과제4 UI 라이브러리 사용하여 컴포넌트 3개씩 사용해보기

---

2023.12.13(수)
재사용될 가능성이 있는 요소들을 공용컴포넌트로 만들어 디자인 시스템을 구축해 생산성 높은 환경을 구축해두었습니다.
프로젝트의 원활한 진행을 위해 같은 디자인이 적용된 요소들이 반복해서 나타나는 회원가입 폼을 피그마로 임의로 작업했습니다.
피그마에서 컴포넌트화될 요소들을 디자인 토큰 프레임 안에 모아두어 빠르게 theme.style.js 로 옮겨올 수 있었습니다.

<p align="center">
<p>design token</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/1b80108a-4209-4812-9c9f-75281768df35">
<p>간단하게 만든 회원가입 폼입니다.</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/8f39af0a-093b-49a3-83a7-b286f4aa8735">
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/43c65336-5e0f-48d9-959f-b24295868c0b">
</p>

```
가영 회고록)
피그마로 디자인을 미리하여, 빠르게 공용 css들을 만들 수 있었습니다.
하지만 Token Studio를 적용 후 피그마에 적용해야한다는 것을 디자인 후 알아차려,
다시 하기에는 너무 생산성이 저하될 거 같다는 생각을 하여 직접 옮겼습니다...^^
다음에는 Token Studio를 선! 적용 해보아야겠습니다.
피그마를 이용하면 리액트에서 핵심인 컴포넌트를 만들고, 구조를 미리 파악하는데에도 용이하여
규모가 커질수록 더 좋을 거 같다는 생각을했습니다.

주연 회고록)
이번에는 페이지가 하나인 간단한 프로젝트여서 피그마에서
따로 Token Studio 플러그인을 사용하지 않았지만 규모가 큰 프로젝트의 경우엔
이 플러그인을 사용하면 통일성 있는 디자인을 보다 효율적으로 진행할 수 있을 것 같습니다.
Token Studio 플러그인의 경우 보다 정확하고 신속하게 체계적으로
디자인을 진행이 가능할 것으로 보였기 때문에 추후에 꼭 써보고 싶습니다.
```

---

2023.12.14(목)

<p align="center">
<p>story book 설치 </br> figma에서 만든 component asset으로 만들어 적용 시도해보기</p>
<p>stories를 만들어 열심히 해봤지만 알 수 없는 error들이 !다양하게! 발생해 미처 완성하지 못함</p>
<img src="https://github.com/kiminn/mobi-2w/assets/134191815/9b68e69e-9b3b-4556-8f3f-35fd17e520da">
</p>
<p align="center">
<p>story book 설치 </br> figma에서 만든 component asset으로 만들어 적용 시도해보기</p>
<p>stories를 만들어 열심히 해봤지만 알 수 없는 error들이 !다양하게! 발생해 미처 완성하지 못함</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/15289d86-ec3f-4730-b7cb-5ab1f0ac31f9">
</p>

```
가영 회고록)
스토리북과 관련된 유튜브 영상.. 블로그들을 참고하여 열심히 적용시켜보았지만,
알 수 없는 오류들에 맞닥뜨렸습니다. (심지어 오류내용도 너무나도 불친절ㅋ)
이를 열심히 검색해보았지만, 자기들도 안된다고 한다는..?... 🤷‍♀️
버전차이로 안되는 것들도 있었는데,,,,,, 하나 해결하면 또 하나 오류나고.. 해결오류해결오류♾️♾️
충분한 시간을 썼고, 다음 번에 다시 시도...해볼..예정입니다...
어디서부터 잘못된 건지 (?)
이를 보완하여 다시 개념부분을 숙지하고 차근차근 해나가야겠습니다.
늘어난 건 나의 욕실력...!

주연 회고록)
한 줄 요약: 알 것 같은데 안 되는 부분이 너무 약오름
이론적으로는 분명 돼야 맞는 것 같은데 왜 안 되는지 모르겠고,
검색해봐도 해결 방법을 제대로 아는 사람이 없었습니다.
당황스러웠고 에러 내용을 복붙해서 검색해봤지만 결국 미결인 채로 끝났습니다.
아직 안 익숙해서 제대로 컨트롤을 못 하는 것 같아
좀 더 개인적으로 추가 공부 후 적용해봐야 할 것 같다는 결론을 내렸고
내일은 일단 머리를 식힐 겸 다른 스타일 라이브러리들부터 찬찬히 숙지해나갈 계획입니다..
아직도 왜 사용하지 않은 name과 displayName 관련 오류가 난 건지 모르겠습니다,,_^^_
```

---

2023.12.15(금)

<p align="left">
    전 날 storybook을 설치하면서 CRA 기본 파일(package.json, node_modules 폴더 등)이 손상되어 runtime과 react-refresh 관련 에러가 발생했습니다. <br/> 
    mobi 운영진 분들의 도움도 받아봤지만 약 세 시간 가량 해결하지 못하고 원인만 대략적으로 파악하게 되었습니다.
    새롭게 CRA를 만들어 다시 제작해 새로운 branch에 업로드했습니다. styled-components를 사용해 공용으로 사용되는 요소들 component로 설정해 디자인 적용 시작했습니다.
</p>

```
가영 참회록)
storybook..진행후.. runtime ? react-refresh???? error발생..ㅋ
🌷🌈peanut✨🌷님이 없었다면 아직도 헤매고 있었을지 모릅니다.
애꿎은 storybook을 신나게 욕한 후, 지웠다 깔았다하며 관련이 없었다는 것을 알게되었습니다.
package자체가 손상되었다는 것을 알게되어.. 새로운 파일을 생성했습니다.
그래서 2번 과감하게 나중으로 스킵..하고 디자인 시스템을 이용하여 공용 컴포넌트 만들기에 집중하고 있습니다.
button, input, select를 컴포넌트화하여 재사용하여서 간단한 회원가입 페이지 form을 만들어보았습니다.

주연 회고록)
한 줄 요약: 회고라기보단 storybook 참회록
storybook 관련 에러인줄 알고 라이브러리를 싫어할 뻔 했습니다.
역시 좋은 라이브러리인 거겠죠..^^ {* kimi: ???????????네?🤷‍♂️ *}
3번 과제를 마저 진행하고 나면 다시 새로운 마음으로 storybook을 공부해봐야겠습니다.
기대되네요, 정말 ^__^ git이야말로 잘 되다가도 오류를 내뱉는 친구였어요. 협업할 때는 더욱 더 조심 또 조심...
styled-components로 요소들을 컴포넌트화하는 부분은 프로젝트 진행하면서도 해봤던 부분이라 익숙했는데
밑에 새로운 라이브러리들은 뭐가 다른지, 어떻게 컴포넌트화해야 styled-components처럼 편리할지 궁금합니다. 얼른 .. 학습.. 기대돼..
```

---

2023.12.16(토)

<p align="center">
<p>figma에 적용된 화면 사이즈(1920px)에 맞춰 styled-components로 요소들을 컴포넌트화해 css 적용했습니다.</p>
<p>1920px 기준에 맞게만 디자인이 되어 있으며 미디어쿼리까지는 진행되어 있지 않습니다.</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/15289d86-ec3f-4730-b7cb-5ab1f0ac31f9">
</p>

<p align="center">
<p>생성했던 공용 컴포넌트를 스토리북을 활용하여 UI 인벤토리화 완료</p>
<p>init 후 args, parameters로 재사용 가능한 요소들 전역 component화했습니다. 페이지네이션은 진행 중...</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/9840dbe0-245b-4f23-ac08-7c002ccc09fd" alt="storybook-button">
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/d39f665b-f39e-47c6-b709-4d59b1950c2a" alt="storybook-input">
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/12490601-e345-4f02-bc7b-1e36b0b0a8d8" alt="storybook-select">
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/c4111a1a-9217-4bd9-b14b-ef4f92b1bbd0" alt="storybook-sns-icon">
</p>

```

가영 회고록)
storybook의 장점은 알겠으나, 자료가 많지 않아서 그런지 만들기가 수월하진 않았습니다...
특히 img 가져오는 경로가 계속 잘못됐다고 뜨는데, 하나씩 가져오기는 어떻게하는지 알겠음.
하지만 나름 효율적으로 select box에서 짠짠짠! 보여주기를 하고싶었기에...😇
어쨌든 해냈습니다 😇 별 거 아닌 거였어서 허탈하긴하지만,ㅠ 원래 다 그런거죠 뭐!
해결 안됐으면 화나서 잠을 못잘뻔... Amy님과 함께라서 그 시간까지 그래도 포기하지않고
해낼 수 있었던 거 같습니다! (* css 부분도 많이 배우는중..!)
확실히 storybook은 여러가지 컴포넌트를 직관적으로 변경하고, 관리하기에 용이해서
규모가 큰 프로젝트나 회사에서 디자이너와 협업하기에 유용하겠다는 생각이 들었습니다.
확실히 협업하는 데에 있어서 큰 장점이 될 거 같으니, 익숙해져봐야겠습니다!




주연 회고록)
한 줄 요약: storybook에서 component 만드는 건 good, 이미지 가져오기가 .......
규모가 큰 프로젝트의 경우, storybook을 사용하게 되면 확실히 디자이너와 협업할 때 빛을 발할 것 같습니다.
단순히 figma에 design-token frame을 만들어 두고 코드를 옮겼을 때보다 수월했습니다.
그리고 component들이 코드로 구현됐을 때 어떻게 보이는지, 나아가 page에 적용됐을 때의 모습도 보여줄 수 있어서
매번 vsCode를 통해 보여줄 필요가 없다는 점도 편할 것 같아요.
버전이 최근에 7로 업데이트 되면서 참고할 수 있는 블로그가 없어 공식페이지에 없는 내용들은 구현하는데 시간이 더 걸렸지만
그래도 페어와 포기하지 않고 매달려서.. 결국 해결했기 때문에 값진 시간이었습니다 😌✨


```

---

2023.12.17(일)

<p align="center">
<p>refresh day</p>
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/134191815/4099ae02-3f7a-45da-bac8-a26b8ba8abdc" alt="happy-birthday">
</p>

```

가영 한줄평) 잘 쉬었습니다!! ⬇️ 감사 >__<🙇‍♀️

주연 한줄평) 🎀 가영님 생일축하 >__< 🎉

```

---

2023.12.18(월)

<p align="center">
<p>처음에 main branch에서 pull을 받아오지 않아 새로운 branch 생성했습니다.</p>
<p>git commit을 가져오려고 cherry-pick 사용해봤으나 과거 시점에서 생성되는게 아니라 최근에 commit 내역만 가져와졌습니다.</p>
<p>그래서 아래 commit 내역을 캡쳐해 첨부합니다.</p>
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/134191815/f277dbb9-40cf-4c05-964d-da459f55d3bb" alt="git-commit">
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/134191815/96168b9f-fe73-4865-bf1b-02a6e9d35f5e" alt="git-commit">
<p>storybook으로 만들었던 component들 디테일한 부분 완료했습니다.</p>
<p>아이콘의 경우 처음에 이미지가 깨져 보이는 것을 방지하기 위해 default 이미지를 추가했습니다.</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/07c313b5-2117-4fe4-8fd3-7dcd5cb5512f" alt="sns">
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/229995ea-d715-49e7-86b8-9ae32719c403" alt="gender">
<p>storybook으로 pagination 부분 component로 만들었습니다.</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/828bd961-d195-424c-babe-3854837f0167" alt="pagination">
</p>

```

가영 회고록)
main에서 pull을 안받았던 나.. 반성.. 결국 4/3까지 생성 했습니다.
main에서 clone먼저하기! 공식문서 보기!아무거나 막 삭제하지않기!
금일 button 속 icon이미지를 select로 변경하고, pagination을 적용했습니다.
그 과정에서 조금 더 storybook의 컴포넌트에 대한 이해나
className으로 접근하는 방법에 대해서 숙지를 할 수 있었습니다.
react-router-dom을 스토리북에 적용시키는 거는 공식문서로 어느정도 확인을했지만,
아직은 원하는대로 useSearchParam을 queryString type으로 가져오는 부분이
부분이 좀 미숙한 거 같습니다. 후에 다시 공부 후 시도해보고싶습니다.!


주연 회고록)
storybook 관련 과제 금일 완성했습니다.
select와 button의 children에 해당하는 내용 추가하고 pagination component화하기 완료했습니다.
useSearchParams()도 적용해보려고 storybook-react-router를 시도해봤으나.. 실패했습니다ㅠ
router 관련된 부분은 storybook에서 어떻게 사용하는거지..? 공식문서를 좀 더 면밀히 살펴봐야 하는건지..
(https://storybook.js.org/addons/storybook-addon-react-router-v6)
우선은 남은 과제부터 먼저 완료하기 위해 미뤄둘 예정이고
회원가입 페이지 부분도 나중에 storybook page 컴포넌트로 구현해보고 싶습니다..!


주현 회고록)
- 늦은 합류로 이전 코드 복기 중 -


```

---

2023.12.19(화) - 20(수)

- storybook : pagination 만들기
- style 라이브러리와의 차이점을 명확히 구분하기

<p align="center">
<p>tailwind로 같은 화면 구현 완료</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/a32470ca-1340-4c69-82a3-d04eb95c89c9" alt="tailwind">
</p>
<p>emotion로 같은 화면 구현 완료</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/97639161-e8af-4a43-9c0e-7cc3d23b8996" alt="emotion">
</p>

<p>style 라이브러리 구분 기준</p>

- 재사용성: 컴포넌트화하기 용이한지, 다양한 상황이나 환경에서도 호환성이 좋은가(커스텀이 용이한가)
- 생산성: 얼마나 많은 기능을 지원해주는가
- 학습성: 적용하는데 걸리는 시간이 얼마나 빠른가
- 접근성: 공식문서가 정리가 잘 되어있는지

| 라이브러리명      | 재사용성 | 생산성 | 학습성 | 접근성 | 한 줄 특징                               |
| ----------------- | -------- | ------ | ------ | ------ | ---------------------------------------- |
| styled-components | 1        | 2      | 1      | 2      | 너무 익숙해서 기준이 됨 (객관성 결여)    |
| tailwind-css      | 3        | 1      | 2      | 1      | 공식문서 정리 끝판왕 (mdn보다 친절)      |
| emotion           | 1        | 3      | 2      | 3      | styled-components와 도긴개긴 (개인 취향) |
| panda-css         | 4        | 4      | 4      | 4      | 이거 뭐야                                |

```

가영 회고록)
전에 만들었던 디자인시스템을 적용했던 회원가입 페이지의
공용 컴포넌트들을 각종 라이브러리들을 사용하여 적용해보았습니다.
페어들과 함께 소통하며 만들어서 조금 더 각 라이브러리들의 장단점을 파악하기 좋았습니다.
뭔가 라이브러리하나를 제대로 파보았다라고 말할 수 없어서
장단점을 제대로 정리할 수 있을진 모르겠지만!
주관적으로 해보겠습니다..

[tailwind]
- 장점 -
개인적으로 tailwind는 공식문서에 내용이 잘 정리가 되어있다는 점이 좋았고,
Tailwind CSS IntelliSense 확장자를 깔면 CSS의 많은 부분을 직관적인 추상화를 해주어,
간단하게 입력이 가능했습니다.
필요한 부분은 커스텀마이징을 통하여 기능을 추가할 수 있었습니다.
공식문서나 블로그들을 참고해보니 반응형 환경을 조금 더 쉽게 조작 할 수 있을 거 같습니다!

- 단점 -
클래스명에 직접 CSS옵션을 적용하기때문에 클래스 이름을 크게 고민할 필요가 없다고하는데
저한테 이부분은 뭔가 단점처럼 느껴졌습니다.
뭔가 styled-component에 비해서 코드가 더러운 느낌? (익숙하지 않아서 그럴 수도)
커스터마이징을 할 수 있다고하는데, tailwind default css와 같이 적용이 안되더라고요...^^?
치명적으로 div 자식에 상속이 안되어서, div 하나하나마다 다 줘야한다는 그런 문제..

[emotion]
- 장점 -
일단, 처음 써보는 사람도 조금 쉽게 접근할 수 있는 거 같습니다.
css나 className을 사용하여 간단하게 속성을 줄 수 있다는 점이 좋았습니다.
styled-component와 비슷하다는 생각이들었고, 사실 제겐 큰 메리트가..??

- 단점 -
emotion은 사용하기는 편하지만 아직 정보가 많지않아 접근성이 떨어지는 거 같았습니다.
styled-component랑 비슷한데 굳이..?



주연 회고록)
다양한 css 라이브러리를 사용하다보니 서로 겹치는 부분들이 있어서 많이 사용해볼수록 새로운 라이브러리 적용 시간이 빨라지는 것 같습니다.
큰 맥락으로 보면 같지만 디테일이 다른.. 느낌?

[ 📚 storybook ]
storybook의 경우는 props의 type을 지정해줄 수 있어서 TS와 함께 많이 사용되는 것 같고,
한 컴포넌트에서도 기능별로 더 세분화해 나눠지는 것 같습니다.
figma에서 만든 component를 plugin으로 storybook에 보낼 수 있다는데, 그 부분을 적용해보지 못해 아쉽습니다.
vsCode에서 storybook은 너무 세분화 되어 있어 규모가 작은 프로젝트에 적용하기엔 좀 번거로울 것 같습니다.
공용화된 요소의 스타일 속성이 따로 css 파일로 분리되어 있어 특정 기능에 대해 확인이 좀 더 빨라진다는 장점이 있습니다.

[ 💨 tailwind ]
tailwind는 공식 문서에 정리가 잘 돼 있어서 좋았지만, 코드가 조금 지저분해지는 경향이 있는 것 같습니다.
스타일을 주는 요소에 이름을 부여할 수 없어 태그 이름을 그대로 사용한다는 점에서 코드가 지저분하게 느껴집니다.
react보다는 일반 html, css, javascript가 혼재돼 있어 보이지만
bootstrap이랑 비슷한 경향이 있는 것 같아 반응형을 적용하기엔 매우 좋을 것 같아요.
하지만 커스텀하기가 좀 불편해서 내가 원하는 정확한 디자인을 그려내기엔 좀 어려움이 있었습니다.

[😃 emotion ]
emotion에서 제공하는 styled와 css도 있어서 styled-components와 매우 비슷하다는 느낌이 들었습니다.
사용하는데 오래 걸리지 않았지만, 하나하나 따옴표("") 안에 넣어줘야 한다는 점이 좀 번거로웠습니다.
이미 styled-components에 너무 익숙해져버려서 굳이 emotion을 제가 나서서 사용할 것 같지는 않습니다.



주현 회고록)
두 분의 이전 코드를 익히려 코드를 보긴했지만 가장 큰 스토리북 사용법을 몰랐습니다.
Amy님께서 시간 내주어 사용법을 잘 설명해 주신 덕분에 스토리북 사용법을 익혔습니다.

storybook
스토리북을 사용하면서 각각 모두 분리를 해야 한다는 단점은 있었지만
분리 방법이 어렵지 않다는 부분과 분리를 해놓은 후에 스타일을 각종상태 값에 따라
바로바로 디자인 이 변경되는 것은 확인할  수 있는 장점이 있었습니다.

tailwind
스타일 라이브러리 중 tailwind를 사용 해보았으며 stlyed-components 라이브러리와 비교해봤습니다만
tailwind는 태그에 직접적으로 사용하다보니 코드가 보기 어려웠고 그룹으로 사용할 수 없어서 불편했습니다.
재사용을 할 수 가 어려웠습니다.
그러나 태그의 직접적인 적용이 가능하여  세세한 속성을 사용할 수 있는 장점이 있던 것 같습니다.

emotion
emotion은 stlyed-components 와 비교했을 때 보기에는 많은 차이가 없었다 보니 적용도 어렵지 않았습니다.
;대신 , 를 쓰는 것 빼고 적용 하는 방법 쉬운것이 가장 큰 장점 입니다.
하지만 그럼 굳이.. emotion을 쓰는 이유가 흐음…

stlyed-components를 쓰는 이유를 느끼는 것 같은 ..느낌..?
또한 두 분이 앞서 진행하신 css가 있다보니 적용 하시는 속도도 훨씬 빠르신데
두 분은 엄청 꼼꼼하시더라구요 css에 진심이신 걸 느꼇습니다..!
{* kimi: 진심아냐....ㅜㅜ그저 과제의 노예!!!주연 디텔 집착녀 Amy : 오해에요,, 하지만 Kimi 님은 진심이 맞는 것 같아요^^  kimi: ??????*}

```

---

2023.12.20(수) - 21(목)

```

가영 회고록)

주연 회고록)

주현 회고록)

```
