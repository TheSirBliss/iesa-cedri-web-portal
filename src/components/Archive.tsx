
import React, { useState } from 'react';
import { FileText, Download, Search, Filter, BookOpen, GraduationCap, Video, Mic } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tutti i Documenti', icon: FileText, count: 500 },
    { id: 'books', name: 'Libri', icon: BookOpen, count: 120 },
    { id: 'articles', name: 'Articoli', icon: FileText, count: 200 },
    { id: 'thesis', name: 'Tesi di Laurea', icon: GraduationCap, count: 85 },
    { id: 'multimedia', name: 'Contenuti Multimediali', icon: Video, count: 95 }
  ];

  const documents = [
    {
      id: 1,
      title: "L'accoglienza familiare terapeutica: modelli europei a confronto",
      author: "Gianfranco Aluffi",
      type: "Libro",
      year: "2023",
      category: "books",
      description: "Analisi comparativa dei modelli IESA europei con focus sulle best practices",
      url: "https://www.aslto3.piemonte.it/wp-content/uploads/2025/01/Archivio-libri.pdf",
      language: "Italiano",
      pages: 245,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Dymphna's Family - Edizione Italiana 2024",
      author: "CEDRI IESA",
      type: "Rivista",
      year: "2024",
      category: "articles",
      description: "Rivista europea sullo IESA con contributi scientifici internazionali",
      url: "#",
      language: "Italiano/Inglese",
      pages: 68,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "L'integrazione sociale attraverso l'accoglienza eterofamiliare",
      author: "Chiara Laura Riccardo",
      type: "Tesi di Dottorato",
      year: "2022",
      category: "thesis",
      description: "Studio longitudinale sull'efficacia del modello IESA",
      url: "https://www.aslto3.piemonte.it/wp-content/uploads/2024/12/Archivio-tesi-di-laurea.pdf",
      language: "Italiano",
      pages: 180,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      title: "Testimonianze IESA - Video Documentario",
      author: "CEDRI IESA",
      type: "Video",
      year: "2024",
      category: "multimedia",
      description: "Raccolta di testimonianze di famiglie e ospiti IESA",
      url: "https://www.youtube.com/@cedriforiesaaslto3",
      language: "Italiano",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      title: "Family Foster Care in Europe: A Comparative Study",
      author: "Jean-Claude Cébula",
      type: "Articolo",
      year: "2023",
      category: "articles",
      description: "Studio comparativo sull'accoglienza familiare in Europa",
      url: "#",
      language: "Inglese",
      pages: 25,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      title: "Podcast IESA - Episodio 1: Le origini a Geel",
      author: "CEDRI IESA",
      type: "Audio",
      year: "2024",
      category: "multimedia",
      description: "Serie podcast sulla storia e l'evoluzione dello IESA",
      url: "#",
      language: "Italiano",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="archive" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-iesa-blue mb-6">
            Archivio Documentale
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Un vasto archivio di documentazione scientifica e storica proveniente da tutta Europa. 
            Accesso libero e gratuito per ragioni di studio e ricerca.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca documenti, autori, argomenti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iesa-teal focus:border-transparent"
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-6 py-3 border-iesa-teal text-iesa-teal hover:bg-iesa-teal hover:text-white"
            >
              <Filter className="h-4 w-4" />
              Filtri Avanzati
            </Button>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-iesa-teal bg-iesa-teal text-white'
                    : 'border-gray-200 hover:border-iesa-teal hover:bg-iesa-teal/10'
                }`}
              >
                <category.icon className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{category.name}</div>
                <div className="text-xs opacity-75">{category.count} doc.</div>
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={doc.image} 
                  alt={doc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-iesa-teal text-white text-xs rounded-full">
                    {doc.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-black/50 text-white text-xs rounded">
                    {doc.year}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-iesa-blue group-hover:text-iesa-teal transition-colors line-clamp-2">
                  {doc.title}
                </CardTitle>
                <div className="text-sm text-gray-600">{doc.author}</div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {doc.description}
                </p>
                
                <div className="space-y-2 mb-4 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Lingua: {doc.language}</span>
                    <span>
                      {doc.pages ? `${doc.pages} pagine` : `${doc.duration}`}
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={() => window.open(doc.url, '_blank')}
                  className="w-full bg-iesa-gradient hover:shadow-lg transition-all duration-300"
                  disabled={doc.url === '#'}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {doc.url === '#' ? 'Presto Disponibile' : 'Accedi al Documento'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access Links - Primo link con colore nero */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-iesa-blue mb-6 text-center">Accesso Rapido</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="https://www.aslto3.piemonte.it/wp-content/uploads/2025/01/Archivio-libri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <BookOpen className="h-8 w-8 mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold">Libri</div>
                <div className="text-sm opacity-90">120 volumi</div>
              </div>
            </a>
            
            <a 
              href="https://www.aslto3.piemonte.it/wp-content/uploads/2025/01/Archivio-articoli.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-iesa-teal to-iesa-blue text-white rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <FileText className="h-8 w-8 mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold">Articoli</div>
                <div className="text-sm opacity-90">200 pubblicazioni</div>
              </div>
            </a>
            
            <a 
              href="https://www.aslto3.piemonte.it/wp-content/uploads/2024/12/Archivio-tesi-di-laurea.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-iesa-blue to-iesa-teal text-white rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <GraduationCap className="h-8 w-8 mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold">Tesi</div>
                <div className="text-sm opacity-90">85 elaborati</div>
              </div>
            </a>
            
            <a 
              href="https://www.youtube.com/@cedriforiesaaslto3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-iesa-teal to-iesa-blue text-white rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <Video className="h-8 w-8 mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold">Multimedia</div>
                <div className="text-sm opacity-90">Video e Audio</div>
              </div>
            </a>
          </div>
        </div>

        {/* Submission Info */}
        <div className="mt-12 text-center">
          <div className="bg-iesa-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Contribuisci all'Archivio</h3>
            <p className="text-lg mb-6 opacity-90">
              Se hai materiale da proporre per l'archivio CEDRI, contattaci. 
              Accettiamo contributi scientifici, tesi, ricerche e documentazione storica.
            </p>
            <a 
              href="mailto:iesaitalia@libero.it"
              className="inline-flex items-center bg-white text-iesa-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Mic className="h-5 w-5 mr-2" />
              Proponi Contenuti
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
