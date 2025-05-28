Bu layihədə React, Chakra UI və Hooks-dan istifadə edərək, pulsuz API-lər vasitəsilə itlərin və pişiklərin şəkillərini çəkib ekranda göstərəcəyik. Layihə iki əsas səhifədən ibarət olacaq: biri itlər, digəri isə pişiklər üçün.

Addım 1: Layihənin Yaradılması
Yeni React layihəsi yaradın (Vite).

Addım 2: Layihəyə Chakra UI əlavə edin
https://chakra-ui.com/docs/get-started/frameworks/vite

Addım 3: Faylların Yaradılması və Düzəlişi

Yeni Komponent Faylları Yaradın:

Header.tsx

Bu komponent tətbiqinizin başlığı və naviqasiya menyusunu əhatə edəcək.
Naviqasiya menyusunda “İtlər” və “Pişiklər” səhifələrinə keçidlər yerləşdirin.
Məsələn, Chakra UI-nın Flex və Link komponentlərindən istifadə edin.
-------------------------------------
Footer.tsx

Tətbiqin alt hissəsində müəllif hüquqları və əlavə məlumatları göstərin.
Box və Text komponentləri ilə estetik və oxunaqlı dizayn yaradın.
DogGallery.tsx

Bu komponent itlərin şəkillərini göstərmək üçün istifadə olunacaq.
Data Çəkilməsi:
useEffect və useState hook-larından istifadə edərək, https://dog.ceo/api/breeds/image/random/6 API-dən 6 təsadüfi it şəkli çəkin.
Dizayn:
Şəkilləri Chakra UI-nın Image, Box və Grid (və ya Flex) komponentlərindən istifadə edərək kart şəklində göstərin.
Kartlara border, borderRadius, boxShadow kimi stil xüsusiyyətləri əlavə edin və _hover effekti ilə dinamik görünüş yaradın.
CatGallery.tsx

Bu komponent pişiklərin şəkillərini göstərmək üçün istifadə olunacaq.
Data Çəkilməsi:
useEffect və useState hook-larından istifadə edərək, https://api.thecatapi.com/v1/images/search?limit=6 API-dən 6 təsadüfi pişik şəkli çəkin.
Dizayn:
Şəkilləri uyğun kartlarda Chakra UI komponentləri ilə yerləşdirin.
Responsive dizayn üçün Flex və ya Grid konteynerlərindən istifadə edin.
Addım 4: App Komponentinin Yaradılması və Routing

React Router-dan istifadə edərək iki səhifə arasında (İtlər və Pişiklər) keçid təmin edin.
App komponentində Header, Footer və routing konfiqurasiyasını yerləşdirin.
Yükləmə zamanı Spinner komponenti ilə gözləmə effekti yaradın və xəta baş verərsə Toast və ya səhv mesajı göstərin.
Dizayn və Layout:

Hər iki səhifədə it və pişik şəkillərinin düzülüşü üçün cavab verən (responsive) Flex və ya Grid konteynerlərindən istifadə edin.
Kartların dizaynında border, borderRadius, boxShadow kimi stil xüsusiyyətləri ilə estetik görünüş təmin edin.
Header və Footer komponentlərində arxa plan rəngləri və uyğun mətni istifadə edərək təmiz, professional dizayn yaradın.
-------------------API-lər-------------------
İtlər üçün API:
https://dog.ceo/api/breeds/image/random/6

Pişiklər üçün API:
https://api.thecatapi.com/v1/images/search?limit=6
