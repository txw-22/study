# 🐍 Python DAY 02 — 변수와 기본 자료형

> **학습일** 2026.11.24 (화)  
> **실습 파일** `study/python/day02.py`  
> **학습 노트 위치** `study/python/studyNote/day02.md`  
> **진행 상태** 개념·코드 작성·확인 문제 완료 / 최종 출력 재확인 및 GitHub 푸시 미확인

## 🎯 오늘의 목표
- 변수의 개념과 대입 연산자 `=`의 의미 이해하기
- `str`, `int`, `float`, `bool` 자료형 구분하기
- `print()`와 `type()`으로 변수의 값과 자료형 확인하기
- 변수를 활용한 자기소개 프로그램 작성하기

## ✅ 학습 체크리스트
- [x] 변수에 값 저장하기
- [x] 네 가지 기본 자료형 학습하기
- [x] 실습 01: 이름·나이 변수 작성하기
- [x] 실습 02: 네 가지 자료형과 `type()` 작성하기
- [x] 실습 03: 자기소개 출력 코드 작성하기
- [x] STEP 01 확인 문제 정답 (1/1)
- [x] DAY 02 최종 확인 문제 정답 (2/2)
- [ ] 실습 03 공백 및 철자 수정 후 직접 재실행해 결과 확인하기
- [ ] GitHub에 코드와 노트 커밋·푸시하기

## 📖 오늘 배운 개념

### 01. 변수와 대입 연산자 `=`
변수는 값에 이름을 붙여 재사용할 수 있도록 하는 방법이다. `=`는 **같다**는 비교가 아니라 오른쪽 값을 왼쪽 변수에 **대입**하는 기호다.

```python
name = "txw"
age = 25
print(name)
print(age)
```

### 02. 기본 자료형
| 자료형 | 의미 | 직접 사용한 값 |
|---|---|---|
| `str` | 문자열 | `"txw"` |
| `int` | 정수 | `25` |
| `float` | 실수 | `169.8` |
| `bool` | 참·거짓 | `True` |

- `"25"`는 문자열(`str`), `25`는 정수(`int`)다.
- `True`, `False`는 Python에서 첫 글자를 대문자로 쓴다.

### 03. `print()`와 `type()`
`print()`는 값이나 문구를 출력한다. `type()`은 값의 자료형을 확인한다.

```python
height = 169.8
is_studying = True
print(type(height))       # <class 'float'>
print(type(is_studying))  # <class 'bool'>
```

`print("이름:", name)`처럼 쉼표로 문자열과 변수를 함께 출력할 수 있다. 쉼표는 기본적으로 항목 사이에 공백을 한 칸 넣는다.

## 💻 직접 작성한 실습 코드

### 실습 01 — 이름과 나이
처음에는 `age = "25"`로 작성했지만, 정수로 저장해야 한다는 점을 이해하고 `age = 25`로 수정했다.

```python
name = "txw"
age = 25
print(name)
print(age)
```

### 실습 02 — 네 가지 자료형
```python
height = 169.8
is_studying = True
print(type(name))
print(type(age))
print(type(height))
print(type(is_studying))
```

위 코드에서 예상되는 출력:
```text
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```

### 실습 03 — 자기소개 프로그램
아래는 **실제로 제출한 코드**의 출력 부분이다. 실행 결과는 아직 별도로 제출하지 않았다.

```python
print("===== Python 자기소개 =====")
print("이름: ",name)
print("나이: ",age)
print("키: ",height)
print("Pythion 공부 중: ",is_studying)
print("===========================")
```

**코드 리뷰 후 수정 권장 내용**
- `"이름: "`의 끝 공백과 `print()`의 쉼표가 만드는 공백이 겹쳐 두 칸이 됨 → `print("이름:", name)`처럼 작성
- `Pythion`은 출력 문구의 오타 → `Python`으로 수정

**수정 권장 코드 (아직 재실행 확인 전)**
```python
print("===== Python 자기소개 =====")
print("이름:", name)
print("나이:", age)
print("키:", height)
print("Python 공부 중:", is_studying)
print("===========================")
```

예상 출력:
```text
===== Python 자기소개 =====
이름: txw
나이: 25
키: 169.8
Python 공부 중: True
===========================
```

## 🔎 코드 리뷰 및 오류 기록
- **자료형 구분 수정:** 초기 작성한 `age = "25"`는 문자열이었다. 정수로 저장하기 위해 따옴표를 제거했다.
- **출력 형식 개선:** `print("이름: ", name)`은 공백이 두 칸 생긴다. 문자열 끝의 공백을 제거하도록 안내받았다.
- **철자 수정 필요:** `Pythion` → `Python`.
- **실행 오류:** 제출된 내용에서 Python 실행 중 발생한 예외나 터미널 오류는 확인되지 않았다. 출력 형식 수정 후 실행 여부도 미확인이다.

## 📝 확인 문제 및 채점
| 문제 | 제출한 답 | 결과 |
|---|---|---|
| STEP 01: `age = 25`의 자료형 | 2번 (`int`) | ✅ 정답 |
| 최종 1: `float`인 변수 | 2번 (`height = 169.8`) | ✅ 정답 |
| 최종 2: `type(age)` 출력 | 3번 (`<class 'int'>`) | ✅ 정답 |

**최종 확인 문제: 2/2 정답 (100점)**

## 💡 오늘의 핵심 한 줄
**변수는 값을 이름으로 저장해 재사용하고, 따옴표와 값의 형태에 따라 자료형이 달라진다.**

## ➡️ 마무리할 일
1. `day02.py`의 실습 03 출력 공백과 `Pythion` 오타 수정
2. VS Code 터미널에서 `python .\python\day02.py` 실행 후 결과 확인
3. `python/studyNote/day02.md` 저장 및 GitHub 푸시