import { Pipe, PipeTransform } from '@angular/core'

interface Tag {
  id: number
  name: string
}

@Pipe({
  name: 'tags',
  standalone: true,
})
export class TagsPipe implements PipeTransform {
  transform(value: Tag[]): string {
    return value.map((tag) => tag.name).join(' / ')
  }
}
