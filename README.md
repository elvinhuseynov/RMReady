Bu layihədə React, Chakra UI və Hooks-dan istifadə edərək Rick and Morty API-dən xarakter məlumatlarını çəkib ekranda göstərəcəyik.

Addım 1: Layihənin Yaradılması
Yeni React layihəsi yaradın (Vite)

Addım 2: Layihəyı Chakra ui əlavə edin
https://chakra-ui.com/docs/get-started/frameworks/vite

Addım 3: Faylların Yaradılması və Düzəlişi
Yeni Komponent Faylı Yaradın:

src qovluğunda yeni bir fayl yaradın: məsələn, CharacterCard.jsx.
Bu faylın içində CharacterCard adlı funksiya komponenti yaradın.
Komponentin Funksionallığı:

Props: Komponentiniz character adında bir obyekt qəbul etməlidir. Bu obyekt xarakterin şəkili, adı, növü (species) və statusunu əhatə edir.
Dizayn:
Üst Hissə: Xarakterin şəkilini mərkəzə yerləşdirin. Şəkil üçün Chakra UI-nın Image və Center komponentlərindən istifadə edin.
Məzmun: Xarakterin adı üçün bir başlıq (Heading) və növü ilə statusu göstərmək üçün Text komponentlərindən istifadə edin.
Konteyner: Bütün məzmunu Box komponentində yerləşdirin və borderWidth, borderRadius, boxShadow kimi stil xüsusiyyətləri ilə estetik görünüş verin.
Hover Effekti: Box komponentinin _hover xüsusiyyətindən istifadə edərək hover zamanı daha böyük kölgə effekti əlavə edin.
Kod Strukturu və Dizaynın İcmalı:

Kod Strukturunuz:
CharacterCard Komponenti:
Alınan character obyektini de-structure edib, elementləri uyğun Chakra UI komponentlərində göstərin.
Məsələn: şəkil ən üstdə, sonra xarakter adı, növü və status.
App Komponenti:
App komponentində useEffect və useState hook-larından istifadə edərək Rick and Morty API-dən məlumatları əldə edin.
Yükləmə zamanı Spinner komponenti, xəta baş verərsə isə Toast və ya səhv mesajı göstərin.
Dizayn Referans Saytı:


Data Çəkilməsi: useEffect ilə Rick and Morty API-dən xarakter məlumatlarını alın və useState ilə saxlayın.
Flex ilə Kartların Düzülüşü:

Flex Konteyneri: Flex komponentindən istifadə edərək, bütün CharacterCard komponentlərini cavab verən (responsive) şəkildə düzün.
Flex Parametrləri:
Məsələn, flexWrap="wrap", justifyContent="center" kimi stil xüsusiyyətlərini əlavə edin ki, kartlar ekran ölçüsünə uyğun olaraq səliqəli düzülsün.


-------------------API-------------------
'https://rickandmortyapi.com/api/character'