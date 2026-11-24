"""
실습 01. 나의 기본 정보 저장하기
1. `name` 변수에 자신의 이름 저장하기
2. `age` 변수에 자신의 나이 저장하기
3. `print()`로 이름과 나이를 각각 출력하기
결과 :
txw
25
"""
name = "txw"
age = 25

# print(name)
# print(age)

"""
실습 02. 네 가지 자료형 사용하기
- `name` : 이름을 문자열로 저장
- `age` : 나이를 정수로 저장
- `height` : 키를 실수로 저장
- `is_studying` : Python을 공부 중이라는 의미로 `True` 저장
작성한 다음 `type()`과 `print()`를 사용해서 각 변수의 자료형을 출력
결과 :
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
"""
height = 169.8
is_studying = True
# print(type(name))
# print(type(age))
# print(type(height))
# print(type(is_studying))

"""
실습 03. 변수로 자기소개 출력하기
기존 `day02.py`에 작성한 네가지 변수를 그래도 사용해.
결과 :
===== Python 자기소개 =====
이름: txw
나이: 25
키: 169.8
Python 공부 중: True
===========================
"""
print("===== Python 자기소개 =====")
print("이름:",name)
print("나이:",age)
print("키:",height)
print("Python 공부 중:",is_studying)
print("===========================")