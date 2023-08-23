export default function Home() {
  return (
    <article>
      <section>
        <h1>Welcome To Angel Pods!</h1>
        <p>기기를 등록하고 분실에 대비하세요!</p>
        <div>
          <button type="button">등록하기</button>
        </div>
      </section>
      <section>
        <h1>
          <span>엔젤팟</span>
          은요?
        </h1>
        <p>
          잃어버린 에어팟을 찾아주신 분은 천사같아요. 천사분들이 더 쉽게
          찾아주실 수 있도록 만든 사이트 입니다.
        </p>
        <ul>
          <li>
            <h2>기기등록!</h2>
            <p>기기 일련번호를 미리 등록해둡니다.</p>
          </li>
          <li>
            <h2>기기조회!</h2>
            <p>만약 분실하면, 일련번호를 조회할 수 있습니다.</p>
          </li>
          <li>
            <h2>매칭완료!</h2>
            <p>미리 등록한 정보로 주인을 찾을 수 있습니다.</p>
          </li>
        </ul>
      </section>
      <section>
        기기 일련번호로 주인을 찾우세요.
        <p>아래 검색창에 기기일변호를 입력해서, 기기의 소유주를 조회할 수 있습니다.</p>
        <button type="button">소유주 조회</button>
      </section>
    </article>
  );
}
